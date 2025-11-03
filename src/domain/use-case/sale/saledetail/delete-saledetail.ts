import { SaleDetailRepository } from "../../..";
import { SaleDetailEntity } from "../../../entities/sales/saledatail.entity";

export interface DeleteSaleDetailDto{
    execute(id:string): Promise<SaleDetailEntity>;
}

export class Delete implements DeleteSaleDetailDto{
    constructor(private readonly repository: SaleDetailRepository){}
    execute(id: string): Promise<SaleDetailEntity> {
        return this.repository.delete(id);
    }
}