import { CreateSubCategoryDto } from "../../dtos";
import { SubCategoryEntity } from "../../entities/subcategory.entity";
import { SubCategoryRepository } from "../../repositories/subCategory-repository";

export interface CreateSubCategoryUseCase {
    execute(dto: CreateSubCategoryDto):Promise<SubCategoryEntity>;
}

export class CreateSubCategory implements  CreateSubCategoryUseCase{
    constructor(
        private readonly repostory: SubCategoryRepository
    ){}
    execute(dto: CreateSubCategoryDto): Promise<SubCategoryEntity> {
        return this.repostory.create( dto );
    }
    
}