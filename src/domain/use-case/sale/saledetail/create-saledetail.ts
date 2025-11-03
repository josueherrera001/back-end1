import { CreateSaleDetailDto } from "../../../dtos";
import { SaleDetailEntity } from "../../../entities/sales/saledatail.entity";
import { SaleDetailRepository } from "../../../repositories/sale/sale-detail-repository";

export interface CreateSaleDetailUserCase{
    execute(dto:CreateSaleDetailDto): Promise<SaleDetailEntity>;
}

export class Create implements CreateSaleDetailUserCase{
    constructor(private readonly repository: SaleDetailRepository){}

    execute(dto: CreateSaleDetailDto): Promise<SaleDetailEntity> {
        return this.repository.create(dto);
    }
}