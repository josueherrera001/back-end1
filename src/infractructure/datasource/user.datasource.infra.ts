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
  async create(
    createuserDto: CreateUserDto,
    auth: RegisterAuthDto
  ): Promise<LoginEntity> {
    const existUser = await prisma.users.findFirst({
      where: { Email: createuserDto.Email },
      select: { Email: true },
    });
    let role = await prisma.roles.findFirst({where: { Name: "Empleado" }});
    let roleId = auth.RoleId == undefined ? auth.RoleId : role?.Id;

    if (existUser) throw CustomError.badRequest("Ya existio ese email");

    let pass = bcryptAdapter.has(auth.UserPass);
    const User = await prisma.users.create({
      data: {
        FirstName: createuserDto.FirstName,
        LastName: createuserDto.LastName,
        State: 1,
        PhoneNumber: createuserDto.Phone,
        Email: createuserDto.Email,
        CreatedDate: new Date(Date.now()),
        Accounts: {
          create: [
            {
              UserName: auth.UserName,
              RoleId: roleId!,
              State: 1,
              UserPass: pass,
              CreatedDate: new Date(Date.now()),
              EmailValidated: false,
            },
          ],
        },
        Addresses: {
          create: [
            {
              Between: createuserDto.Address.BetweenStreet,
              CreatedDate: new Date(Date.now()),
              Country: createuserDto.Address.Country,
              Province: createuserDto.Address.Province,
              Location: createuserDto.Address.Location,
              Number: createuserDto.Address.StreetNumber,
              Street: createuserDto.Address.Street,
            },
          ],
        },
      },
    });
   
    //* JWT <----- Para mantener la autencation

    const token: any = await JwtAdapter.generateToken({
      UserId: User.Id,
      RoleId: roleId,
      UserName: auth.UserName,
      Email: User.Email,
      Role: role?.Name
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
        Accounts: true,
      },
      where: {
        Id: id,
      },
    });

    if (!user) throw ErrorSpecific.ErrorEmpty(`Id usuario:  ${id} no encontrado`);
    return UserEntity.fromObject(user);
  }

  async updateById(updateUserDto: UpdateUserDto): Promise<UserEntity> {
    await this.findById(updateUserDto.Id);

    const updatedContact = await prisma.users.update({
      where: {
        Id: updateUserDto.Id,
      },
      data: updateUserDto!.Values,
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
