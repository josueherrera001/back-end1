import { LoginUserDto } from "../../dtos/Auth/login-user.dto";
import { LoginEntity } from "../../entities/login.entity";
import { AuthRepository } from "../../repositories/auth-repository";

export interface LoginUserCase{
    execute(dto: LoginUserDto):Promise<LoginEntity>;
}

export class Login implements LoginUserCase{
    constructor(private readonly repository: AuthRepository ){}
    execute(dto: LoginUserDto): Promise<LoginEntity> {
        return this.repository.Login(dto);
    }

}