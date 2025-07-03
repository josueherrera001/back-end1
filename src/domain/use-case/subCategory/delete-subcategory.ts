import { SubCategoryEntity } from "../../entities/subcategory.entity";
import { SubCategoryRepository } from "../../repositories/subCategory-repository";

export interface DeleteSubCategoryUseCase {
    execute(id: string):Promise<SubCategoryEntity>;
}

export class DeleteSubCategory implements  DeleteSubCategoryUseCase{
    constructor(
        private readonly repostory: SubCategoryRepository
    ){}
    execute(id: string): Promise<SubCategoryEntity> {
        return this.repostory.deleteById( id );
    }
    
}