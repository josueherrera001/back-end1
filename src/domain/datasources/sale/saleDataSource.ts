import { SaleEntity } from "../../entities/sales/sale.entity";

export abstract class SaleDataSource{
    abstract create(dto:any):Promise<SaleEntity>;
    abstract getById(id:string):Promise<SaleEntity>;
    abstract update(id:string, dto:any):Promise<SaleEntity>;
    abstract delete(id:string):Promise<SaleEntity>;
    abstract getAll():Promise<SaleEntity[]>;
}