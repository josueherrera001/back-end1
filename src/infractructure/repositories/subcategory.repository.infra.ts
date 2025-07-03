import { CreateSubCategoryDto, SubCategoryDatasource, SubCategoryEntity, SubCategoryRepository, UpdateSubCategoryDto } from "../../domain";

 export class SubCategoryRepositoryInfra implements SubCategoryRepository{
    
    constructor(
        private readonly datasource: SubCategoryDatasource
    ){}
     create(createTodoDto: CreateSubCategoryDto): Promise<SubCategoryEntity> {
        return this.datasource.create( createTodoDto );
     }
     getAll(): Promise<SubCategoryEntity[]> {
        return this.datasource.getAll( );
     }
     findById(id: string): Promise<SubCategoryEntity> {
        return this.datasource.findById( id );
     }
     updateById(updateTodoDto: UpdateSubCategoryDto): Promise<SubCategoryEntity> {
        return this.datasource.updateById( updateTodoDto );
     }
     deleteById(id: string): Promise<SubCategoryEntity> {
        return this.datasource.deleteById( id );
     }
 }