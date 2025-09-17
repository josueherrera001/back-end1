import { prisma } from "../../data";
import { SubCategoryDatasource, CreateSubCategoryDto, SubCategoryEntity, UpdateSubCategoryDto } from "../../domain";
import { ErrorSpecific } from "../../helpers";

export class SubCategoryDataSourceInfra implements SubCategoryDatasource {
    async create(createDto: CreateSubCategoryDto): Promise<SubCategoryEntity> {
        const entity = await prisma.subCategories.create({
            data:{
                CategoryId: createDto.CategoryId,
                Description: createDto.Description,
                Name: createDto.Name,
                CreatedDate: new Date(),
            }
        });
        return SubCategoryEntity.fromObject( entity );
    }

    async getAll(): Promise<SubCategoryEntity[]> {
        const entities = await prisma.subCategories.findMany();

        return entities.map(entity => SubCategoryEntity.fromObject(entity));
    }

    async findById(id: string): Promise<SubCategoryEntity> {
        const entity = await prisma.subCategories.findFirst({
            where:{
                Id:id
            }
        });

        if ( !entity ) throw ErrorSpecific.ErrorEmpty(`Id subcategoria:  ${ id } no encontrado`);
        return SubCategoryEntity.fromObject(entity);
    }
    
    async updateById(updateDto: UpdateSubCategoryDto): Promise<SubCategoryEntity> {
        
        await this.findById( updateDto.Id );       

        const updatedEntity = await prisma.subCategories.update({
            where:{
                Id:updateDto.Id
            },
            data:{
                CategoryId: updateDto.CategoryId,
                Description: updateDto.Description,
                Name: updateDto.Name,
            }
        });

        return SubCategoryEntity.fromObject( updatedEntity );
    }

    async deleteById(id: string): Promise<SubCategoryEntity> {
        await this.findById( id );  

        const deleteentity = await prisma.categories                                                                                                .delete({
            where:{
                Id:id
            }
        });

        return SubCategoryEntity.fromObject( deleteentity );
    }
    
}