import { UpdateSubCategoryDto } from "../../dtos";
import { SubCategoryEntity } from "../../entities/subcategory.entity";
import { SubCategoryRepository } from "../../repositories/subCategory-repository";

export interface UpdateSubCategoryUseCase {
    execute(dto: UpdateSubCategoryDto):Promise<SubCategoryEntity>;
}

export class UpdateSubCategory implements  UpdateSubCategoryUseCase{
    constructor(
        private readonly repostory: SubCategoryRepository
    ){}
    execute(dto: UpdateSubCategoryDto): Promise<SubCategoryEntity> {
        return this.repostory.updateById( dto );
    }   
    
}