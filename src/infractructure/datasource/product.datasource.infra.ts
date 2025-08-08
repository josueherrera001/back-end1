import { prisma } from "../../data";
import { CreateProductDto, ProductDatasource, ProductEntity, UpdateProductDto } from "../../domain";

export class ProductDataSourceInfra implements ProductDatasource {
    async create(createDto: CreateProductDto): Promise<ProductEntity> {
        const entity = await prisma.products.create({
            data:{
                Description: createDto.Description,
                Name: createDto.Name,
                SubCategoryId: createDto.SubCategoryId,
                PresentationId: createDto.PresentationId,
                SupplierId: createDto.SupplierId,  
                ImageUrl: createDto.ImageUrl,              
                CreatedDate: new Date(),
            }
        });
        return ProductEntity.fromObject( entity );
    }

    async getAll(): Promise<ProductEntity[]> {
        const entities = await prisma.products.findMany();

        return entities.map(entity => ProductEntity.fromObject(entity));
    }

    async findById(id: string): Promise<ProductEntity> {
        const entity = await prisma.products.findFirst({
            where:{
                Id:id
            }
        });

        if ( !entity ) throw `Id del producto:  ${ id } no encontrado`;
        return ProductEntity.fromObject(entity);
    }
    
    async updateById(updateDto: UpdateProductDto): Promise<ProductEntity> {
        
        await this.findById( updateDto.Id );       

        const updatedentity = await prisma.products.update({
            where:{
                Id:updateDto.Id
            },
            data:{
                Description: updateDto.Description,
                Name: updateDto.Name,
                SubCategoryId: updateDto.SubCategoryId,
                PresentationId: updateDto.PresentationId,
                SupplierId: updateDto.SupplierId,  
                ImageUrl: updateDto.ImageUrl, 
            }
        });

        return ProductEntity.fromObject( updatedentity );
    }

    async deleteById(id: string): Promise<ProductEntity> {
        await this.findById( id );  

        const deleteentity = await prisma.products.delete({
            where:{
                Id:id
            }
        });
        return ProductEntity.fromObject( deleteentity );
    }
    
}