import { SubCategoryEntity } from "../../entities/subcategory.entity";
import { SubCategoryRepository } from "../../repositories/subCategory-repository";

export interface GetSubCategoryUseCase {
    execute(id: string):Promise<SubCategoryEntity>;
}

export class GetSubCategory implements  GetSubCategoryUseCase{
    constructor(
        private readonly repostory: SubCategoryRepository
    ){}
    execute(id: string): Promise<SubCategoryEntity> {
        return this.repostory.findById( id );
    }
    
}