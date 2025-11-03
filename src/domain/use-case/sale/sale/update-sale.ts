import { SaleEntity, UpdateSaleDto } from "../../..";
import { SaleRepository } from "../../../repositories/sale/sale-repository";

export interface UpdateSaleUserCase{
    execute(Id: string, dto:UpdateSaleDto): Promise<SaleEntity>;
}

export class Update implements UpdateSaleUserCase{
    constructor(private readonly repository: SaleRepository){} 
    execute(Id: string, dto:UpdateSaleDto): Promise<SaleEntity> {
        return this.repository.update(Id, dto);
    }
}