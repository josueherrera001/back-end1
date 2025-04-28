import { CreateUserDto,UserEntity, UserRepository, UserDatasource, RegisterAuthDto, UpdateUserDto, LoginEntity } from "../../domain";

 export class UserRepositoryInfra implements UserRepository{
    
    constructor(
        private readonly datasource: UserDatasource
    ){}
     create(createTodoDto: CreateUserDto, auth:RegisterAuthDto): Promise<LoginEntity> {
        return this.datasource.create( createTodoDto, auth );
     }
     getAll(): Promise<UserEntity[]> {
        return this.datasource.getAll( );
     }
     findById(id: string): Promise<UserEntity> {
        return this.datasource.findById( id );
     }
     updateById(updateTodoDto: UpdateUserDto): Promise<UserEntity> {
        return this.datasource.updateById( updateTodoDto );
     }
     deleteById(id: string): Promise<UserEntity> {
        return this.datasource.deleteById( id );
     }
 }