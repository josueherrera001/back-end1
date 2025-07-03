import { CreateRoleDto, RoleDatasource, RoleEntity, RoleRepository, UpdateRoleDto } from "../../domain";

 export class RoleRepositoryInfra implements RoleRepository{
    
    constructor(
        private readonly datasource: RoleDatasource
    ){}
     create(createTodoDto: CreateRoleDto): Promise<RoleEntity> {
        return this.datasource.create( createTodoDto );
     }
     getAll(): Promise<RoleEntity[]> {
        return this.datasource.getAll( );
     }
     findById(id: string): Promise<RoleEntity> {
        return this.datasource.findById( id );
     }
     updateById(updateTodoDto: UpdateRoleDto): Promise<RoleEntity> {
        return this.datasource.updateById( updateTodoDto );
     }
     deleteById(id: string): Promise<RoleEntity> {
        return this.datasource.deleteById( id );
     }
 }