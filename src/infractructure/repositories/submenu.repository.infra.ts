import { CreateSubMenuDto, SubMenuDatasource, SubMenuEntity, SubMenuRepository, UpdateSubMenuDto } from "../../domain";

 export class SubMenuRepositoryInfra implements SubMenuRepository{
    
    constructor(
        private readonly datasource: SubMenuDatasource
    ){}
     create(createTodoDto: CreateSubMenuDto): Promise<SubMenuEntity> {
        return this.datasource.create( createTodoDto );
     }
     getAll(): Promise<SubMenuEntity[]> {
        return this.datasource.getAll( );
     }
     findById(id: string): Promise<SubMenuEntity> {
        return this.datasource.findById( id );
     }
     updateById(updateTodoDto: UpdateSubMenuDto): Promise<SubMenuEntity> {
        return this.datasource.updateById( updateTodoDto );
     }
     deleteById(id: string): Promise<SubMenuEntity> {
        return this.datasource.deleteById( id );
     }
 }