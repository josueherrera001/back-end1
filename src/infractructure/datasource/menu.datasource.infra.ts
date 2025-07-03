import { prisma } from "../../data";
import { CreateMenuDto, MenuDatasource, MenuEntity, UpdateMenuDto } from "../../domain";

export class MenuDataSourceInfra implements MenuDatasource {
    async create(createDto: CreateMenuDto): Promise<MenuEntity> {
        const entity = await prisma.menues.create({
            data:{
                Description: createDto.Description,
                Name: createDto.Name,
                HasSubMenu: createDto.HasSubMenu,
                Url: createDto.Url,
                CreatedDate: new Date(),
            }
        });
        return MenuEntity.fromObject( entity );
    }

    async getAll(): Promise<MenuEntity[]> {
        const entities = await prisma.menues.findMany();

        return entities.map(entity => MenuEntity.fromObject(entity));
    }

    async findById(id: string): Promise<MenuEntity> {
        const entity = await prisma.menues.findFirst({
            where:{
                Id:id
            }
        });

        if ( !entity ) throw `Id del menu:  ${ id } no encontrado`;
        return MenuEntity.fromObject(entity);
    }
    
    async updateById(updateDto: UpdateMenuDto): Promise<MenuEntity> {
        
        await this.findById( updateDto.Id );       

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
    }

    async deleteById(id: string): Promise<MenuEntity> {
        await this.findById( id );  

        const deleteentity = await prisma.menues.delete({
            where:{
                Id:id
            }
        });

        return MenuEntity.fromObject( deleteentity );
    }
    
}