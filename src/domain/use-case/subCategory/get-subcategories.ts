import { SubCategoryEntity } from "../../entities/subcategory.entity";
import { SubCategoryRepository } from "../../repositories/subCategory-repository";

export interface GetSubCategoriesUseCase {
    execute(CategoryId: String):Promise<SubCategoryEntity[]>;
}

export class GetSubCategories implements  GetSubCategoriesUseCase{
    constructor(
        private readonly repostory: SubCategoryRepository
    ){}
    execute(CategoryId: String): Promise<SubCategoryEntity[]> {
        return this.repostory.getAll(CategoryId);
    }
    
}