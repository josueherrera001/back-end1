import { prisma } from "../../data";
import { CreateMenuDto, MenuDatasource, MenuEntity, UpdateMenuDto } from "../../domain";
import { ErrorSpecific } from "../../helpers";

export class MenuDataSourceInfra implements MenuDatasource {
    async create(createDto: CreateMenuDto): Promise<MenuEntity> {
        const ultimoRegistro = await prisma.menues.findFirst({
                orderBy: {
                    Position: 'desc', // O el campo de fecha/hora
                },
            });
       try {
         const entity = await prisma.menues.create({
            data:{
                Description: createDto.Description,
                Name: createDto.Name,
                HasSubMenu: createDto.HasSubMenu,
                Url: createDto.Url,
                Position: (ultimoRegistro?.Position ?? 0) + 1,
                CreatedDate: new Date(),
            }
        });
        return MenuEntity.fromObject( entity );
       } catch (error: any) {
        throw ErrorSpecific.ErrorDB(error);
       }
    }

    async getAll(): Promise<MenuEntity[]> {
    const entities = await prisma.menues.findMany({
        orderBy: {
            Position: 'asc', // Adjust the order as needed
        },
        where: {
            // You can add any specific conditions here if needed
        },
        include: {
            // Replace 'submenus' with the actual relation name from your Prisma schema
            SubMenu: true, // Includes all fields of the 'submenus' relation
        },
    });

        return entities.map(entity => MenuEntity.fromObject(entity));
    }

    async findById(id: string): Promise<MenuEntity> {
        const entity = await prisma.menues.findFirst({
            where:{
                Id:id
            }
        });

        if ( !entity ) throw ErrorSpecific.ErrorEmpty(`Id del menu:  ${ id } no encontrado`);
        return MenuEntity.fromObject(entity);
    }
    
    async updateById(updateDto: UpdateMenuDto): Promise<MenuEntity> {
        await this.findById( updateDto.Id );   
        try {               

            const updatedentity = await prisma.menues.update({
                where:{
                    Id:updateDto.Id
                },
                data:{
                
                    Description: updateDto.Description,
                    Name: updateDto.Name,
                    HasSubMenu: updateDto.HasSubMenu,
                    Url: updateDto.Url,
                }
            });

            return MenuEntity.fromObject( updatedentity );
        } catch (error) {
            throw ErrorSpecific.ErrorDB(error);
        }
    }

    async deleteById(id: string): Promise<MenuEntity> {
         await this.findById( id ); 
       try { 

        const deleteentity = await prisma.menues.delete({
            where:{
                Id:id
            }
        });

        return MenuEntity.fromObject( deleteentity );
       } catch (error) {
        throw ErrorSpecific.ErrorDB(error);
       }
    }
    
}