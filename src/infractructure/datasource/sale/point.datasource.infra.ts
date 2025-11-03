import { prisma } from "../../../data";
import { CreatePointDto, PointDataSource, PointEntity, UpdatePointDto } from "../../../domain";

export class PointDataSourceInfra implements PointDataSource {
    async create(createDto: CreatePointDto): Promise<PointEntity> {
         const entity = await prisma.points.create({
            data:{
                AccountId: createDto.AccountId,
                SaleId: createDto.SaleId,
                Point: createDto.Point,
                ExpiredDatePoint: createDto.ExpiredDatePoint
            }
         });
        return PointEntity.fromObject( entity );
    }
    async getbyId(id: string): Promise<PointEntity> {
        const entity = await prisma.points.findFirst({
            where:{
                Id:id
            }
        });        
        return PointEntity.fromObject(entity!);
    }
    async update(id: string, dto: UpdatePointDto): Promise<PointEntity> {
        const result = await prisma.points.update({
            where:{
                Id:id
            },
            data:{
                AccountId: dto.AccountId,   
                SaleId: dto.SaleId,
                Point: dto.Point,
                ExpiredDatePoint: dto.ExpiredDatePoint
            }
        });
        return PointEntity.fromObject(result);
    }
    async delete(id: string): Promise<PointEntity> {
        const entity = await prisma.points.delete({
            where:{
                Id:id
            }
        });
        return PointEntity.fromObject(entity);
    }
    getAll(AccountId: string): Promise<PointEntity[]> {
        const entities = prisma.points.findMany({
            where:{
                AccountId:AccountId
            }
        });
        return entities.then(list => list.map( entity => PointEntity.fromObject(entity) ));
    }
}