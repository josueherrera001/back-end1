import { LoginUserDto, UpdateAuthDto } from "../dtos";
import { AccountEntity } from "../entities/account.entity";
import { LoginEntity } from "../entities/login.entity";

export abstract class AuthDatasource{
    abstract Login(dto: LoginUserDto): Promise<LoginEntity>;
    abstract AllAccount(): Promise<AccountEntity[]>;
    abstract ValidateEmail(token:string):Promise<true>;
    abstract ChangePass(updateDto:UpdateAuthDto):Promise<true>;
}