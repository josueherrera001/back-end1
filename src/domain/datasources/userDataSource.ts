import { CreateUserDto, RegisterAuthDto, UpdateUserDto } from "../dtos";
import { LoginEntity } from "../entities/login.entity";
import { UserEntity } from "../entities/user.entity";

export abstract class UserDatasource{
    abstract create(createTodoDto: CreateUserDto, auth:RegisterAuthDto): Promise<LoginEntity>;
    abstract getAll():Promise<UserEntity[]>;
    abstract findById(id:string):Promise<UserEntity>;
    abstract updateById(updateTodoDto:UpdateUserDto):Promise<UserEntity>;
    abstract deleteById(id:string):Promise<UserEntity>;
}