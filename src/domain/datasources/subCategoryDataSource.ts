import { SubCategoryEntity } from "..";
import { CreateSubCategoryDto, UpdateSubCategoryDto } from "../dtos";

export abstract class SubCategoryDatasource{
    abstract create(Dto: CreateSubCategoryDto): Promise<SubCategoryEntity>;
    abstract getAll(CategoryId: String):Promise<SubCategoryEntity[]>;
    abstract findById(id:string):Promise<SubCategoryEntity>;
    abstract updateById(Dto:UpdateSubCategoryDto):Promise<SubCategoryEntity>;
    abstract deleteById(id:string):Promise<SubCategoryEntity>;
}