import { SaleDetailEntity } from "../../../entities/sales/saledatail.entity";
import { SaleDetailRepository } from "../../../repositories/sale/sale-detail-repository";

export interface GetSaleDetailsUserCase{
    execute(): Promise<SaleDetailEntity[]>;
}

export class GetAll implements GetSaleDetailsUserCase{  
    constructor(private readonly repository: SaleDetailRepository){}

    execute(): Promise<SaleDetailEntity[]> {
        return this.repository.getAll();
    }   
}