import { prisma } from "../../data";
import { CreateProductDto, ProductDatasource, ProductEntity, UpdateProductDto } from "../../domain";
import { ErrorSpecific } from "../../helpers";

export class ProductDataSourceInfra implements ProductDatasource {
    async create(createDto: CreateProductDto): Promise<ProductEntity> {
       try {
         const entity = await prisma.products.create({
            data:{
                Description: createDto.Description,
                Name: createDto.Name,
                SubCategoryId: createDto.SubCategoryId,
                PresentationId: createDto.PresentationId,
                SupplierId: createDto.SupplierId,  
                ImageUrl: createDto.ImageUrl,
                PublicIdUrl: createDto.PublicIdUrl,              
                CreatedDate: new Date(),
                lots:{
                    create:[
                        {
                            CreatedDate: new Date(),
                            HasExpiredDate: createDto.lot.HasExpiredDate,
                            LotCode:createDto.lot.LotCode,
                            ProductCode: createDto.lot.ProductCode,
                            PurchasePrice: createDto.lot.PurchasePrice,
                            SalePrice:createDto.lot.SalePrice,
                            stock: createDto.lot.stock,
                            ExpiredDate:createDto.lot.ExpiredDate
                        }
                    ]
                }
            }
        });
        return ProductEntity.fromObject( entity );
       } catch (error) {
        throw ErrorSpecific.ErrorDB( error );
       }
    }

    async getAll(): Promise<any[]> {
        const entities = await prisma.products.findMany({
            include:{
                lots:true,              
                Presentation:true,
                SubCategory:true,
                Supplier:true
            }
        });
        return entities;
    }

    async findById(id: string): Promise<ProductEntity> {
        const entity = await prisma.products.findFirst({
            where:{
                Id:id
            }
        });

        if ( !entity ) throw ErrorSpecific.ErrorEmpty(`Id del producto:  ${ id } no encontrado`);
        return ProductEntity.fromObject(entity);
    }
    
    async updateById(updateDto: UpdateProductDto): Promise<ProductEntity> {
      try {
          
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
      } catch (error) {
        throw ErrorSpecific.ErrorDB( error );
        
      }
    }

    async deleteById(id: string): Promise<ProductEntity> {
       try {
         await this.findById( id );  

        const deleteentity = await prisma.products.delete({
            where:{
                Id:id
            }
        });
        return ProductEntity.fromObject( deleteentity );
       } catch (error) {
        throw ErrorSpecific.ErrorDB( error );
       }
    }
    
}