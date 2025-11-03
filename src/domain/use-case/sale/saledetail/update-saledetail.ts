import { SaleDetailEntity, SaleDetailRepository } from "../../..";
import { UpdateSaleDetailDto } from "../../../dtos";

export interface UpdateSaleDetailUserCase{
    execute(Id:string, dto:UpdateSaleDetailDto): Promise<SaleDetailEntity>;
}

export class Update implements UpdateSaleDetailUserCase{
    constructor(private readonly repository: SaleDetailRepository){}
    execute(Id: string, dto: UpdateSaleDetailDto): Promise<SaleDetailEntity> {
        return this.repository.update(Id, dto);
    }
}