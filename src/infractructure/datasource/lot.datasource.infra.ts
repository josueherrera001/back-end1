import { prisma } from "../../data";
import { LotDatasource, LotEntity, CreateLotDto, UpdateLotDto } from "../../domain";
import { ErrorSpecific } from "../../helpers";

export class LotDataSourceInfra implements LotDatasource {
    async create(createDto: CreateLotDto): Promise<LotEntity> {
        const entity = await prisma.lots.create({
            data:{
                HasExpiredDate: !!createDto.HasExpiredDate,
                LotCode: createDto.LotCode,
                ExpiredDate: createDto.ExpiredDate === "" ? new Date() : createDto.ExpiredDate,
                ProductCode: createDto.ProductCode,
                PurchasePrice: createDto.PurchasePrice,
                SalePrice: createDto.SalePrice,
                stock: createDto.stock,
                ProductId: createDto.ProductId,                
                CreatedDate: new Date(),
            }
        });
        return LotEntity.fromObject( entity );
    }

    async getAll(): Promise<LotEntity[]> {
        const entities = await prisma.lots.findMany();

        return entities.map(entity => LotEntity.fromObject(entity));
    }

    async findById(id: string): Promise<LotEntity> {
        const entity = await prisma.lots.findFirst({
            where:{
                Id:id
            }
        });

        if ( !entity ) throw ErrorSpecific.ErrorEmpty(`Id lote:  ${ id } no encontrado`);
        return LotEntity.fromObject(entity);
    }
    
    async updateById(updateDto: UpdateLotDto): Promise<LotEntity> {
        
        await this.findById( updateDto.Id );       

        const updatedEntity = await prisma.lots.update({
            where:{
                Id:updateDto.Id
            },
            data:{
                HasExpiredDate: updateDto.HasExpiredDate,
                LotCode: updateDto.LotCode,
                ExpiredDate: updateDto.ExpiredDate === "" ? new Date() : updateDto.ExpiredDate,
                ProductCode: updateDto.ProductCode,
                PurchasePrice: updateDto.PurchasePrice,
                SalePrice: updateDto.SalePrice,
                stock: updateDto.stock,
                ProductId: updateDto.ProductId
            }
        });

        return LotEntity.fromObject( updatedEntity );
    }

    async deleteById(id: string): Promise<LotEntity> {  
         await this.findById( id );  

         let result = await this.getAll();

         if ( result.length <= 1) throw ErrorSpecific.ErrorEmpty(`El producto debe tener al menos un lote`);

        const deleteentity = await prisma.lots.delete({
            where:{
                Id:id
            }
        });

        return LotEntity.fromObject( deleteentity );
    }
    
}