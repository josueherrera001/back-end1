import { SaleEntity } from "../../../entities/sales/sale.entity";

export interface GetSalesUserCase{
    execute(): Promise<SaleEntity[]>;
}

export class GetAll implements GetSalesUserCase{  
    constructor(private readonly repository: any){}
    execute(): Promise<SaleEntity[]> {
        return this.repository.getAll();
    }
}