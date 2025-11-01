import { bcryptAdapter } from "../../config/bcrypt.adapter";
import { JwtAdapter } from "../../config/jwt.adapter";
import { prisma } from "../../data";
import { AccountEntity, LoginEntity, LoginUserDto, UpdateAuthDto } from "../../domain";
import { AuthDatasource } from "../../domain/datasources/auth.DataSource";
import { CustomError } from "../../helpers/error/custom.error";
import { ErrorSpecific } from '../../helpers';

export class AuthDataSourceInfra implements AuthDatasource {
    async AllAccount(): Promise<AccountEntity[]> {
         const existUser = await prisma.accounts.findMany({
           where:{
            State:1
           },
           include:{
            Role:true,
            User:true,
            AccountMenu:{
                include:{
                    Menu:{
                        include:{
                            SubMenu:true  
                            }
                        }
                    }   
                }
           }
         });
    return existUser.map(entity => AccountEntity.fromObject(entity));

    }
    async Login(dto: LoginUserDto): Promise<LoginEntity> {
        const existUser = await prisma.accounts.findFirst({
            include:{
                Role:true,                
                User:true      
            },
           where: {
            UserName:dto.UserName
        }
    });


        if ( !existUser ) throw CustomError.badRequest('No existe ese usuario');
        if ( !existUser.EmailValidated ) throw CustomError.badRequest('No esta activada la cuenta');
        
        const isMatching = bcryptAdapter.compare(dto.Password, existUser.UserPass!);
        if ( !isMatching ) throw CustomError.badRequest('Usuario y/o contraseña incorrecto');       

           let createtoken:string = await JwtAdapter.generateToken({   
            Id:existUser.Id,        
            UserId:existUser.UserId,            
            RoleId: existUser.RoleId,
            UserName:existUser.UserName,
            Email: existUser.User.Email,
            Role: existUser.Role.Name
        });

        if ( !createtoken ) throw CustomError.internalServer('Error al crear el token');

        return {
            UserName: existUser.UserName,
            token:createtoken
        };
    }
    async ValidateEmail(token: string): Promise<true> {
        const payload = await JwtAdapter.validateToken( token);

        if ( !payload ) throw CustomError.unAuthorized('Token invalido');
        const { Email } = payload as { Email: string};
     
        if ( !Email ) throw CustomError.internalServer('Email not in token');

        const user = await prisma.users.findFirst({
            include:{               
                Accounts:true      
            },
            where:{
            Email:Email
        } });

        if ( !user ) throw CustomError.internalServer('Email not exist');
        const { Accounts } = user;

       await prisma.accounts.update({
        where:{
            Id: Accounts[0].Id
        },
        data:{
            EmailValidated: true
        }
       });
        return true;
    }
    async ChangePass(updateDto: UpdateAuthDto): Promise<true> {
         await this.findById( updateDto.id );       
        
                const updatedaccount = await prisma.accounts.update({
                    where:{
                        Id:updateDto.id
                    },
                    data:{
                       UserPass: updateDto.UserPass 
                    }
                });
        
                return true;
    } 
    async findById(id: string): Promise<true> {
        const user = await prisma.accounts.findFirst({
            where:{
                Id:id
            }
        });
    
        if ( !user ) throw ErrorSpecific.ErrorEmpty(`Id usuario:  ${ id } no encontrado`);
        return true;
    } 
}