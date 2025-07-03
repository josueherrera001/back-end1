import { CategoryEntity } from "../../entities/category.entity";
import { CategoryRepository } from "../../repositories/category-repository";

export interface GetCategoryUseCase {
    execute(id: string):Promise<CategoryEntity>;
}

export class GetCategory implements  GetCategoryUseCase{
    constructor(
        private readonly repostory: CategoryRepository
    ){}
    execute(id: string): Promise<CategoryEntity> {
        return this.repostory.findById( id );
    }
    
}