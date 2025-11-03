import { CreateSaleDetailDto, SaleDetailDataSource, SaleDetailEntity, SaleDetailRepository, UpdateSaleDetailDto } from "../../../domain";

export class SaleDetailReposoitoryInfra implements SaleDetailRepository {
    constructor(
         private readonly datasource: SaleDetailDataSource
    ){}
    create(dto: CreateSaleDetailDto): Promise<SaleDetailEntity> {
        return this.datasource.create( dto );
    }   
    getById(id: string): Promise<SaleDetailEntity> {
        return this.datasource.geById( id );
    }
    update(id: string, dto: UpdateSaleDetailDto): Promise<SaleDetailEntity> {
        return this.datasource.update( id, dto );
    }
    delete(id: string): Promise<SaleDetailEntity> {
        return this.datasource.delete( id );
    }
    getAll(): Promise<SaleDetailEntity[]> {
        return this.datasource.getAll( );
    }   
}