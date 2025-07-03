import { CategoryEntity } from "../../entities/category.entity";
import { CategoryRepository } from "../../repositories/category-repository";

export interface DeleteCategoryUseCase {
    execute(id: string):Promise<CategoryEntity>;
}

export class DeleteCategory implements  DeleteCategoryUseCase{
    constructor(
        private readonly repostory: CategoryRepository
    ){}
    execute(id: string): Promise<CategoryEntity> {
        return this.repostory.deleteById( id );
    }
    
}