import { LoginEntity, AuthRepository, LoginUserDto, UpdateAuthDto } from "../../domain";
import { AuthDatasource } from "../../domain/datasources/auth.DataSource";

 export class AuthRepositoryInfra implements AuthRepository{
    
    constructor(
        private readonly datasource: AuthDatasource
    ){}
     Login(LoginUser: LoginUserDto): Promise<LoginEntity> {
        return this.datasource.Login( LoginUser );
     }
     validateEmail(token: string): Promise<boolean> {
        return this.datasource.ValidateEmail( token );
     }
     ChangePass(updateDto: UpdateAuthDto): Promise<boolean> {
        return this.datasource.ChangePass( updateDto );
     }     
 }