import { prisma } from "../../../data";
import { CreateSaleDto, SaleDataSource, SaleEntity, UpdateSaleDto } from "../../../domain";
import { ErrorSpecific } from "../../../helpers";

export class SaleDataSourceInfra implements SaleDataSource {
    async create(createDto: CreateSaleDto): Promise<SaleEntity> {
         try {
            return await prisma.$transaction(async (tx) => {
            const newSale = await tx.sales.create({
                data:{
                    AccountId: createDto.AccountId,
                    InvoiceCode: createDto.InvoiceCode,
                    IsOnline: createDto.IsOnline,
                    Total: createDto.Total,
                    FinalizeSale: createDto.FinalizeSale,
                    SaleType: createDto.SaleType,
                    OpenWorkTurnId: createDto.OpenWorkTurnId,
                    TotalProfit:  createDto.IsOnline == true ? createDto.Total : 0
                }
            });

            const entity = await prisma.saleDetails.create({
                data:{
                    SaleId: newSale.Id,
                    ProductId: createDto.Detail!.ProductId!,
                    Quantity: createDto.Detail!.Quantity,
                    Price: createDto.Detail!.Price,
                    Profit:  ((Number(createDto.Detail!.Price)) * createDto.Detail!.Quantity)-((Number((await prisma.lots.findFirst({where:{ProductId: createDto.Detail!.ProductId}}))?.PurchasePrice) || 0)) ,
                    SubCategoryId: createDto.Detail!.SubCategoryId,
                    
                }   
            });

             if (createDto.IsOnline) {
                tx.points.create({
                    data:{
                        AccountId: createDto.AccountId,
                        SaleId: newSale.Id,
                        Point: Math.floor(Number(newSale.Total) / 10),
                        ExpiredDatePoint: new Date( new Date().setFullYear( new Date().getFullYear() + 1 ) )
                    }
                });
            }

            return SaleEntity.fromObject(newSale);
        });
         } catch (error) {            
            throw error;
        } finally {
            await prisma.$disconnect();
        }
    }
    async getById(id: string): Promise<SaleEntity> {
        const entity = await prisma.sales.findFirst({
            where:{
                Id:id
            }
        });
        return SaleEntity.fromObject(entity!);
    }
    async update(id: string, dto: UpdateSaleDto): Promise<SaleEntity> {
        const entity = await prisma.sales.update({
            where:{
                Id:id   
            },
            data: dto.values
        });
        return SaleEntity.fromObject(entity!);
    }
    async delete(id: string): Promise<SaleEntity> {
       const entity = await prisma.sales.delete({
            where:{
                Id:id
            }
        });
        return SaleEntity.fromObject(entity!);
    }
    
    async getAll(): Promise<SaleEntity[]> {
        const entities = await prisma.sales.findMany();
        return entities.map(entity => SaleEntity.fromObject(entity));
    }

    async findById(id: string): Promise<SaleEntity> {
        const entity = await prisma.sales.findFirst({
            where:{
                Id:id
            }
        });

        if ( !entity ) throw ErrorSpecific.ErrorEmpty(`Id de la venta:  ${ id } no encontrado`);
        return SaleEntity.fromObject(entity);
    }   
}