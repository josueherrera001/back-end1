import { UserEntity } from "../entities/user.entity";
import { CreateUserDto, RegisterAuthDto, UpdateUserDto } from '../dtos';
import { LoginEntity } from "../entities/login.entity";

export abstract class UserRepository{
    abstract create(createDto: CreateUserDto, auth:RegisterAuthDto): Promise<LoginEntity>;
    abstract getAll():Promise<UserEntity[]>;
    abstract findById(id:string):Promise<UserEntity>;
    abstract updateById(updateTodoDto:UpdateUserDto):Promise<UserEntity>;
    abstract deleteById(id:string):Promise<UserEntity>;
}