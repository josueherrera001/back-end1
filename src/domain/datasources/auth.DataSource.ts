import { LoginUserDto, UpdateAuthDto } from "../dtos";
import { LoginEntity } from "../entities/login.entity";

export abstract class AuthDatasource{
    abstract Login(dto: LoginUserDto): Promise<LoginEntity>;
    abstract ValidateEmail(token:string):Promise<true>;
    abstract ChangePass(updateDto:UpdateAuthDto):Promise<true>;
}