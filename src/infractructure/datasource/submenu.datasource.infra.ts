import { prisma } from "../../data";
import { CreateSubMenuDto, SubMenuDatasource, SubMenuEntity, UpdateSubMenuDto } from "../../domain";
import { ErrorSpecific } from "../../helpers";

export class SubMenuDataSourceInfra implements SubMenuDatasource {
    async create(createDto: CreateSubMenuDto): Promise<SubMenuEntity> {
         const entity = await prisma.subMenues.create({
            data:{
                MenuId: createDto.MenuId,
                Description: createDto.Description,
                Name: createDto.Name,
                Url: createDto.Url,
                CreatedDate: new Date(),
            }
        });
        return SubMenuEntity.fromObject( entity );
    }

    async getAll(): Promise<SubMenuEntity[]> {
        const entities = await prisma.subMenues.findMany();

        return entities.map(entity => SubMenuEntity.fromObject(entity));
    }

    async findById(id: string): Promise<SubMenuEntity> {
        const entity = await prisma.subMenues.findFirst({
            where:{
                Id:id
            }
        });

        if ( !entity ) throw ErrorSpecific.ErrorEmpty(`Id del menu:  ${ id } no encontrado`);
        return SubMenuEntity.fromObject(entity);
    }
    
    async updateById(updateDto: UpdateSubMenuDto): Promise<SubMenuEntity> {
        await this.findById( updateDto.Id );   
            const updatedentity = await prisma.subMenues.update({
                where:{
                    Id:updateDto.Id
                },
                data:{
                    MenuId: updateDto.MenuId,
                    Description: updateDto.Description,
                    Name: updateDto.Name,
                    Url: updateDto.Url,
                }
            });

            return SubMenuEntity.fromObject( updatedentity );
    }

    async deleteById(id: string): Promise<SubMenuEntity> {
         await this.findById( id ); 
        const deleteentity = await prisma.subMenues.delete({
            where:{
                Id:id
            }
        });

        return SubMenuEntity.fromObject( deleteentity );
    }
    
}