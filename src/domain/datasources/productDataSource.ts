import { ProductEntity } from "..";
import { CreateProductDto, UpdateProductDto } from "../dtos";

export abstract class ProductDatasource{
    abstract create(Dto: CreateProductDto): Promise<ProductEntity>;
    abstract getAll():Promise<ProductEntity[]>;
    abstract findById(id:string):Promise<ProductEntity>;
    abstract updateById(Dto:UpdateProductDto):Promise<ProductEntity>;
    abstract deleteById(id:string):Promise<ProductEntity>;
}