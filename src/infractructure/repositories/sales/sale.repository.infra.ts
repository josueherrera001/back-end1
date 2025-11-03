import { CreateSaleDto, SaleDataSource, SaleEntity, SaleRepository, UpdateSaleDto } from "../../../domain";

export class SaleRepositoryInfra implements SaleRepository {
    constructor(
         private readonly datasource: SaleDataSource
    ){}
    create(dto: CreateSaleDto): Promise<SaleEntity> {
        return this.datasource.create( dto );
    }
    getById(id: string): Promise<SaleEntity> {
        return this.datasource.getById( id );
    }
    update(id: string, dto: UpdateSaleDto): Promise<SaleEntity> {
        return this.datasource.update( id, dto );
    }
    delete(id: string): Promise<SaleEntity> {
        return this.datasource.delete( id );
    }
    getAll(): Promise<SaleEntity[]> {
        return this.datasource.getAll( );
    }
}