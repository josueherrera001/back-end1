import { SupplierEntity } from "..";
import { CreateSupplierDto, UpdateSupplierDto } from "../dtos";

export abstract class SupplierDatasource{
    abstract create(Dto: CreateSupplierDto): Promise<SupplierEntity>;
    abstract getAll():Promise<SupplierEntity[]>;
    abstract findById(id:string):Promise<SupplierEntity>;
    abstract updateById(Dto:UpdateSupplierDto):Promise<SupplierEntity>;
    abstract deleteById(id:string):Promise<SupplierEntity>;
}