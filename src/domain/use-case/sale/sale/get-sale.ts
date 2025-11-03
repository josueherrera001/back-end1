import { SaleEntity } from "../../../entities/sales/sale.entity";
import { SaleRepository } from "../../../repositories/sale/sale-repository";

export interface GetSaleUserCase{
    execute(Id: string): Promise<SaleEntity>;
}

export class Get implements GetSaleUserCase{
    constructor(private readonly repository: SaleRepository){} 

    execute(Id: string): Promise<SaleEntity> {
        return this.repository.getById(Id);
    }    
}