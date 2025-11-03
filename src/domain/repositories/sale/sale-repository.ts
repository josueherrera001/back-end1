import { SaleEntity } from "../..";

export abstract class SaleRepository{
    abstract create(dto:any):Promise<SaleEntity>;
    abstract getById(id:string):Promise<SaleEntity>;
    abstract update(id:string, dto:any):Promise<SaleEntity>;
    abstract delete(id:string):Promise<SaleEntity>;
    abstract getAll():Promise<SaleEntity[]>;
}