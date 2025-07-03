import { CreateMenuDto, MenuDatasource, MenuEntity, MenuRepository, UpdateMenuDto } from "../../domain";

 export class MenuRepositoryInfra implements MenuRepository{
    
    constructor(
        private readonly datasource: MenuDatasource
    ){}
     create(createTodoDto: CreateMenuDto): Promise<MenuEntity> {
        return this.datasource.create( createTodoDto );
     }
     getAll(): Promise<MenuEntity[]> {
        return this.datasource.getAll( );
     }
     findById(id: string): Promise<MenuEntity> {
        return this.datasource.findById( id );
     }
     updateById(updateTodoDto: UpdateMenuDto): Promise<MenuEntity> {
        return this.datasource.updateById( updateTodoDto );
     }
     deleteById(id: string): Promise<MenuEntity> {
        return this.datasource.deleteById( id );
     }
 }