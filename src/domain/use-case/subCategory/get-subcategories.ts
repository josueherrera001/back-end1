import { SubCategoryEntity } from "../../entities/subcategory.entity";
import { SubCategoryRepository } from "../../repositories/subCategory-repository";

export interface GetSubCategoriesUseCase {
    execute():Promise<SubCategoryEntity[]>;
}

export class GetSubCategories implements  GetSubCategoriesUseCase{
    constructor(
        private readonly repostory: SubCategoryRepository
    ){}
    execute(): Promise<SubCategoryEntity[]> {
        return this.repostory.getAll();
    }
    
}