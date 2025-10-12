import { prisma } from "../../data";
import { CategoryDatasource, CreateCategoryDto, CategoryEntity, UpdateCategoryDto } from "../../domain";
import { CustomError, ErrorSpecific } from "../../helpers";

export class CategoryDataSourceInfra implements CategoryDatasource {
    async create(createDto: CreateCategoryDto): Promise<CategoryEntity> {
        const isexist = await prisma.categories.findFirst({
             where: {
                Name:createDto.Name
            }
        });
        console.log("Category exist ", isexist);
         if ( isexist ) throw CustomError.badRequest('Ya existio una categoria con ese nombre');
        const entity = await prisma.categories.create({
            data:{
                Description: createDto.Description ?? null,
                Name: createDto.Name,
                CreatedDate: new Date(),
            }
        });
        return CategoryEntity.fromObject( entity );
    }

    async getAll(): Promise<CategoryEntity[]> {
        const entities = await prisma.categories.findMany();

        return entities.map(entity => CategoryEntity.fromObject(entity));
    }

    async findById(id: string): Promise<CategoryEntity> {
        const entity = await prisma.categories.findFirst({
            where:{
                Id:id
            }
        });

        if ( !entity ) throw ErrorSpecific.ErrorEmpty(`Id categoria:  ${ id } no encontrado`);
        return CategoryEntity.fromObject(entity);
    }
    
    async updateById(updateDto: UpdateCategoryDto): Promise<CategoryEntity> {
        
        await this.findById( updateDto.Id );       

        const updatedEntity = await prisma.categories.update({
            where:{
                Id:updateDto.Id
            },
            data:{
                Description: updateDto.Description,
                Name: updateDto.Name,
            }
        });

        return CategoryEntity.fromObject( updatedEntity );
    }

    async deleteById(id: string): Promise<CategoryEntity> {
        await this.findById( id );  

        const deleteentity = await prisma.categories.delete({
            where:{
                Id:id
            }
        });

        return CategoryEntity.fromObject( deleteentity );
    }
    
}