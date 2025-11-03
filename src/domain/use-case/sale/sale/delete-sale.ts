import { SaleEntity } from "../../../entities/sales/sale.entity";
import { SaleRepository } from "../../../repositories/sale/sale-repository";

export interface DeleteSaleUserCase{
    execute(Id:string): Promise<SaleEntity>;
}

export class Delete implements DeleteSaleUserCase{
    constructor(private readonly repository: SaleRepository){} 
    execute(Id: string): Promise<SaleEntity> {
        return this.repository.delete(Id);
    }
}