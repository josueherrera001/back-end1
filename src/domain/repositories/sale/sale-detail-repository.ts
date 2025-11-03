import { CreateSaleDetailDto } from "../../dtos";
import { SaleDetailEntity } from "../../entities/sales/saledatail.entity";

export abstract class SaleDetailRepository {
    abstract getById(id: string): Promise<any>;
    abstract create(dto: CreateSaleDetailDto): Promise<SaleDetailEntity>;
    abstract getAll(): Promise<SaleDetailEntity[]>;
    abstract delete(id: string): Promise<SaleDetailEntity>;
    abstract update(id: string, dto: CreateSaleDetailDto): Promise<SaleDetailEntity>;
}