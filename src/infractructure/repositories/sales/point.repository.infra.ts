import { CreatePointDto, PointDataSource, PointEntity, PointRepository, UpdatePointDto } from "../../../domain";

export class PointRepositoryInfra implements PointRepository {
    constructor(
         private readonly datasource: PointDataSource
    ){}
    create(dto: CreatePointDto): Promise<PointEntity> {
        return this.datasource.create( dto );
    }
    getbyId(id: string): Promise<PointEntity> {
        return this.datasource.getbyId( id );
    }
    update(id: string, dto: UpdatePointDto): Promise<PointEntity> {
        return this.datasource.update( id, dto );
    }
    delete(id: string): Promise<PointEntity> {
        return this.datasource.delete( id );
    }
    getAll(AccountId: string): Promise<PointEntity[]> {
        return this.datasource.getAll( AccountId );
    }
}