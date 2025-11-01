import { bcryptAdapter } from "../../config/bcrypt.adapter";
import { EmailService } from "../../config/email.service";
import { envs } from "../../config/envs";
import { JwtAdapter } from "../../config/jwt.adapter";
import { prisma } from "../../data";
import {
  UserDatasource,
  RegisterAuthDto,
  CreateUserDto,
  UpdateUserDto,
  LoginEntity,
} from "../../domain";
import { UserEntity } from "../../domain/entities/user.entity";
import { ErrorSpecific } from "../../helpers";
import { CustomError } from "../../helpers/error/custom.error";

export class UserDataSourceInfra implements UserDatasource {
  constructor(private readonly emailService: EmailService) {}
  async create(createuserDto: CreateUserDto,auth: RegisterAuthDto): Promise<LoginEntity> {
   try {
     return await prisma.$transaction(async (tx) => {
       const existUser = await prisma.users.findFirst({
         where: { Email: createuserDto.Email },
         select: { Email: true },
       });
       let role = await prisma.roles.findFirst({
         where: { Name: "Usuario" },
       });
       let roleId = auth.RoleId == undefined ? auth.RoleId : role?.Id;

       if (existUser) throw CustomError.badRequest("Ya existio ese email");

       let pass = bcryptAdapter.has(auth.UserPass);
       const User = await tx.users.create({
         data: {
           FirstName: createuserDto.FirstName,
           LastName: createuserDto.LastName,
           State: 1,
           PhoneNumber: createuserDto.Phone,
           Email: createuserDto.Email,
           CreatedDate: new Date(Date.now()),          
           Addresses: {
             create: [
               {
                 Between: createuserDto.Address.BetweenStreet || createuserDto.Address.BetweenStreet,
                 CreatedDate: new Date(Date.now()),
                 Country: createuserDto.Address.Country,
                 Province: createuserDto.Address.Province,
                 Location: createuserDto.Address.Location,
                 Number: createuserDto.Address.StreetNumber || createuserDto.Address.StreetNumber,  
                 Street: createuserDto.Address.Street,
               },
             ],
           },
         },
       });
       let account = await tx.accounts.create({
        data:{
            UserId:User.Id,
            UserName: auth.UserName,
            RoleId: roleId!,
            State: 1,
            UserPass: pass,
            CreatedDate: new Date(Date.now()),
            EmailValidated: false,
          }
       });

       let menu = await prisma.menues.findMany({
        where:{
          State: 1
        }
       });

       for (let index = 0; index < menu.length; index++) {
        const element = menu[index];
        if( element.Name === 'Categoria' || element.Name === 'Inicio' || element.Name ==='Contacto'){
          let accountmenu = await tx.accountMenus.create({
              data:{
                MenuId:element.Id,
                AccountId: account!.Id,            
                CreatedDate: new Date(Date.now()),            
              }
            });
            
          let submenu = await prisma.subMenues.findMany({
            where:{
              AND:[
                { MenuId: element.Id },
                { State: 1 }
              ]
            }
          });

          for (let index = 0; index < submenu.length; index++) {
            const element = submenu[index];
            await tx.accountMenuItem.create({
              data:{
                SubMenuId:element.Id,
                AccountMenuId: accountmenu.Id,
                AccountId: account!.Id
              }
            });
          }
        
        }
        
       }
       //* JWT <----- Para mantener la autencation

       const token: any = await JwtAdapter.generateToken({
         Id:account.Id,
         UserId: User.Id,
         RoleId: roleId,
         UserName: auth.UserName,
         Email: User.Email,
         Role: role?.Name,
       });

       await this.sendEmailValidattionLink(
         token,
         User.Email,
         User.FirstName + " " + User.LastName
       );

       return {
         UserName: auth.UserName,
         token: token,
       };
     });
   } catch (error) {
    console.error("Transaccion fallido: ", error)
     throw error;
   } finally {
     await prisma.$disconnect();
   }
  }

async getAll(): Promise<UserEntity[]> {  
  const users = await prisma.users.findMany({  
    include: {  
      Accounts: {  
        include: {  
          Role: true  
        }  
      },  
      Addresses: true  
    }  
  });  
  return users.map((user) => UserEntity.fromObject(user));  
}
  async findById(id: string): Promise<UserEntity> {  
  const user = await prisma.users.findFirst({  
    include: {  
      Accounts: {  
        include: {  
          Role: true  
        }  
      },  
      Addresses: true  
    },  
    where: {  
      Id: id,  
    },  
  });  
  
 if (!user) throw ErrorSpecific.ErrorEmpty(`Id usuario:  ${id} no encontrado`);  
  return UserEntity.fromObject(user);   
}

  async updateById(updateUserDto: UpdateUserDto): Promise<UserEntity> {        
  console.log('=== DEBUG updateById (Datasource) ===');      
  console.log('updateUserDto.Id:', updateUserDto.Id);      
  console.log('updateUserDto completo:', updateUserDto);      
  console.log('updateUserDto.Values:', updateUserDto.Values);   
  
  await this.findById(updateUserDto.Id);      
      
  const updateData: any = { ...updateUserDto.Values };      
        
  // Manejar contraseñas vacías (si existen en Accounts)    
  if (updateData.Accounts?.update?.data?.UserPass === '') {      
    delete updateData.Accounts.update.data.UserPass;      
  }      
      
  // Extraer el objeto address si existe    
  const addressData = updateData.address;    
  delete updateData.address; // Remover del objeto principal    
      
  // Construir el objeto para Prisma    
  const prismaUpdateData: any = { ...updateData };    
      
  // Si hay datos de dirección, construir la estructura correcta para Prisma    
  if (addressData) {    
    // Obtener la dirección existente del usuario  
    const existingAddress = await prisma.addresses.findFirst({  
      where: { UserId: updateUserDto.Id }  
    });  
  
    if (existingAddress) {  
      // Usar 'update' para actualizar la dirección existente  
      prismaUpdateData.Addresses = {    
        update: {  
          where: { Id: existingAddress.Id },  
          data: {    
            Country: addressData.Country,    
            Province: addressData.Province,    
            Location: addressData.Location,    
            Street: addressData.Street,    
            Number: addressData.Number,    
            Between: addressData.Between    
          }    
        }  
      };    
    } else {  
      // Si no existe dirección, crear una nueva  
      prismaUpdateData.Addresses = {  
        create: {  
          Country: addressData.Country,  
          Province: addressData.Province,  
          Location: addressData.Location,  
          Street: addressData.Street,  
          Number: addressData.Number,  
          Between: addressData.Between,  
          CreatedDate: new Date(),  
          State: 1  
        }  
      };  
    }  
  }    
      
  const updatedContact = await prisma.users.update({      
    where: { Id: updateUserDto.Id },      
    data: prismaUpdateData,    
    include: {    
      Addresses: true,    
      Accounts: true    
    }    
  });      
      
  return UserEntity.fromObject(updatedContact);      
}

  async deleteById(id: string): Promise<UserEntity> {
    let user = await this.findById(id);

    if (!user) throw CustomError.badRequest("No existe ese usuario");

    const deletecontact = await prisma.users.update({
      where: {
        Id: id,
      },
      data: {
        State: 2,
        FinalDate: new Date(Date.now()),
        Accounts: {
          updateMany: {
            where: {
              UserId: id,
            },
            data: {
              State: 2,
              FinalDate: new Date(Date.now()),
              EmailValidated: false,
            },
          },
        },
      },
      include: {
        Accounts: true,
      },
    });

    return UserEntity.fromObject(deletecontact);
  }

  private sendEmailValidattionLink = async (
    token: string,
    email:string,
    fullName: string
  ) => {
    // const token = await JwtAdapter.generateToken({ email });

    if (!token) throw CustomError.internalServer("Error getting token");
    const link = `${envs.WEBSERVICE_URL}/${envs.APP_API_VERSION}/auth/validate-email/${token}`;
    const html = `
           <div class="container">
                <img src="https://emprenderconactitud.com/img/nety.png" alt="Logo" style="height: 100px; margin: 0 auto 20px; display: block;">
                <h1 class="header">¡Ya casi estás listo/a!</h1>
                <p>Hola, ${fullName}:</p>
                <p>Para completar la registración de tu cuenta y comenzar a disfrutar de los beneficios de [Nombre de la Plataforma], necesitamos confirmar que tenemos tu dirección de correo electrónico correcta.</p>
                <a href="${link}" class="button">Verificar correo electrónico</a>
                <p class="footer">Si tienes alguna pregunta o necesitas asistencia, no dudes en ponerte en contacto con nuestro equipo de soporte.</p>
                <p class="footer">Atentamente,</p>
                <p class="footer">Equipo de soporte</p>
            </div>
        `;
    const option = {
      to: email,
      subject: "Validate your email",
      htmlBody: html,
    };

    const isSent = await this.emailService.sendEmail(option);
    if (!isSent) throw CustomError.internalServer("Error sending email");
    return true;
  };
}
