import { CategoryEntity } from "..";
import { CreateCategoryDto, UpdateCategoryDto } from "../dtos";

export abstract class CategoryDatasource{
    abstract create(Dto: CreateCategoryDto): Promise<CategoryEntity>;
    abstract getAll():Promise<CategoryEntity[]>;
    abstract findById(id:string):Promise<CategoryEntity>;
    abstract updateById(Dto:UpdateCategoryDto):Promise<CategoryEntity>;
    abstract deleteById(id:string):Promise<CategoryEntity>;
}