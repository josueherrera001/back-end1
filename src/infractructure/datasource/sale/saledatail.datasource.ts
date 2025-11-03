import { prisma } from "../../../data";
import { CreateSaleDetailDto, SaleDetailDataSource, SaleDetailEntity } from "../../../domain";

export class SaleDetailDataSounrceInfra implements SaleDetailDataSource {
    async create(createDto: CreateSaleDetailDto): Promise<SaleDetailEntity> {
         const entity = await prisma.saleDetails.create({
            data:{
                SaleId: createDto.SaleId,
                ProductId: createDto.ProductId,
                Quantity: createDto.Quantity,
                Price: createDto.Price,
                Profit:  ((Number(createDto.Price)) * createDto.Quantity)-((Number((await prisma.lots.findFirst({where:{ProductId: createDto.ProductId}}))?.PurchasePrice) || 0)) ,
                SubCategoryId: createDto.SubCategoryId,
                
            }
        });
        return SaleDetailEntity.fromObject( entity );
    }
    async geById(id: string): Promise<any> {
        const entity = await prisma.saleDetails.findFirst({
            where:{
                Id:id
            }
        });
        return SaleDetailEntity.fromObject(entity!);
    }
    async getAll(): Promise<SaleDetailEntity[]> {
        const entities = await prisma.saleDetails.findMany();
        return entities.map(entity => SaleDetailEntity.fromObject(entity));
    }
    async delete(id: string): Promise<SaleDetailEntity> {
        const entity = await prisma.saleDetails.delete({
            where:{
                Id:id
            }
        });
        return SaleDetailEntity.fromObject(entity);
    }
    async update(id: string, dto: CreateSaleDetailDto): Promise<SaleDetailEntity> {
        const result = await prisma.saleDetails.update({
            where:{
                Id:id
            },
            data:{
                SaleId: dto.SaleId,
                ProductId: dto.ProductId,
                Quantity: dto.Quantity,
                Price: dto.Price,
                SubCategoryId: dto.SubCategoryId    
            }
        });
        return SaleDetailEntity.fromObject(result);
    }
}