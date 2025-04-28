import { CreateUserDto, RegisterAuthDto } from "../../dtos";
import { LoginEntity } from "../../entities/login.entity";
import { UserEntity } from "../../entities/user.entity";
import { UserRepository } from "../../repositories/user-repository";

export interface CreateUserCase{
    execute(dto: CreateUserDto, auth:RegisterAuthDto):Promise<LoginEntity>;
}

export class CreateUser implements CreateUserCase{
    constructor(private readonly repository: UserRepository){}
    execute(dto: CreateUserDto, auth:RegisterAuthDto): Promise<LoginEntity> {
        return this.repository.create(dto, auth);
    }

}