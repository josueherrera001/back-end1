import { CreateCategoryDto, CategoryDatasource, CategoryEntity, CategoryRepository, UpdateCategoryDto } from "../../domain";

 export class CategoryRepositoryInfra implements CategoryRepository{
    
    constructor(
        private readonly datasource: CategoryDatasource
    ){}
     create(createTodoDto: CreateCategoryDto): Promise<CategoryEntity> {
        return this.datasource.create( createTodoDto );
     }
     getAll(): Promise<CategoryEntity[]> {
        return this.datasource.getAll( );
     }
     findById(id: string): Promise<CategoryEntity> {
        return this.datasource.findById( id );
     }
     updateById(updateTodoDto: UpdateCategoryDto): Promise<CategoryEntity> {
        return this.datasource.updateById( updateTodoDto );
     }
     deleteById(id: string): Promise<CategoryEntity> {
        return this.datasource.deleteById( id );
     }
 }