import { CreateCategoryDto } from "../../dtos";
import { CategoryEntity } from "../../entities/category.entity";
import { CategoryRepository } from "../../repositories/category-repository";

export interface CreateCategoryUseCase {
    execute(dto: CreateCategoryDto):Promise<CategoryEntity>;
}

export class CreateCategory implements  CreateCategoryUseCase{
    constructor(
        private readonly repostory: CategoryRepository
    ){}
    execute(dto: CreateCategoryDto): Promise<CategoryEntity> {
        return this.repostory.create( dto );
    }
    
}