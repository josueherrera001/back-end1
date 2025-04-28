import { LoginUserDto } from './../dtos/Auth/login-user.dto';
import { LoginEntity } from '../entities/login.entity';
import { UpdateAuthDto } from '../dtos';

export abstract class AuthRepository{
    abstract Login(LoginUser: LoginUserDto): Promise<LoginEntity>;
    abstract validateEmail(token:string):Promise<boolean>;
    abstract ChangePass(updateDto:UpdateAuthDto):Promise<boolean>;
}