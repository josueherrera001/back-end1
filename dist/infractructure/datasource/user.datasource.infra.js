"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDataSourceInfra = void 0;
const bcrypt_adapter_1 = require("../../config/bcrypt.adapter");
const envs_1 = require("../../config/envs");
const jwt_adapter_1 = require("../../config/jwt.adapter");
const data_1 = require("../../data");
const user_entity_1 = require("../../domain/entities/user.entity");
const custom_error_1 = require("../../domain/error/custom.error");
class UserDataSourceInfra {
    constructor(emailService) {
        this.emailService = emailService;
        this.sendEmailValidattionLink = (email, fullName) => __awaiter(this, void 0, void 0, function* () {
            const token = yield jwt_adapter_1.JwtAdapter.generateToken({ email });
            if (!token)
                throw custom_error_1.CustomError.internalServer('Error getting token');
            const link = `${envs_1.envs.WEBSERVICE_URL}/${envs_1.envs.APP_API_VERSION}/auth/validate-email/${token}`;
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
                subject: 'Validate your email',
                htmlBody: html
            };
            const isSent = yield this.emailService.sendEmail(option);
            if (!isSent)
                throw custom_error_1.CustomError.internalServer('Error sending email');
            return true;
        });
    }
    create(createuserDto, auth) {
        return __awaiter(this, void 0, void 0, function* () {
            const existUser = yield data_1.prisma.users.findFirst({
                where: { Email: createuserDto.Email },
                select: { Email: true },
            });
            if (existUser)
                throw custom_error_1.CustomError.badRequest('Ya existio ese email');
            let pass = bcrypt_adapter_1.bcryptAdapter.has(auth.UserPass);
            const User = yield data_1.prisma.users.create({
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
                                RoleId: auth.RoleId,
                                UserPass: pass,
                                CreatedDate: new Date(Date.now()),
                                EmailValidated: false
                            },
                        ],
                    },
                    Addresses: {
                        create: [
                            {
                                Between: createuserDto.Address.BetweenStreet,
                                CreatedDate: new Date(Date.now()),
                                LocationId: createuserDto.Address.LocationId,
                                Number: createuserDto.Address.StreetNumber,
                                Street: createuserDto.Address.Street
                            }
                        ]
                    }
                },
            });
            yield this.sendEmailValidattionLink(createuserDto.Email, createuserDto.FirstName + " " + createuserDto.LastName);
            //* JWT <----- Para mantener la autencation
            const token = yield jwt_adapter_1.JwtAdapter.generateToken({
                Id: User.Id,
                RoleId: auth.RoleId,
                UserName: auth.UserName,
            });
            return {
                UserName: auth.UserName,
                token: token
            };
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield data_1.prisma.users.findMany();
            return users.map(user => user_entity_1.UserEntity.fromObject(user));
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield data_1.prisma.users.findFirst({
                include: {
                    Accounts: true
                },
                where: {
                    Id: id
                }
            });
            if (!user)
                throw `Id usuario:  ${id} no encontrado`;
            return user_entity_1.UserEntity.fromObject(user);
        });
    }
    updateById(updateUserDto) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.findById(updateUserDto.Id);
            const updatedContact = yield data_1.prisma.users.update({
                where: {
                    Id: updateUserDto.Id
                },
                data: updateUserDto.Values
            });
            return user_entity_1.UserEntity.fromObject(updatedContact);
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let user = yield this.findById(id);
            if (!user)
                throw custom_error_1.CustomError.badRequest('No existe ese usuario');
            const deletecontact = yield data_1.prisma.users.update({
                where: {
                    Id: id
                },
                data: {
                    State: 2,
                    FinalDate: new Date(Date.now()),
                    Accounts: {
                        updateMany: {
                            where: {
                                UserId: id
                            },
                            data: {
                                State: 2,
                                FinalDate: new Date(Date.now()),
                                EmailValidated: false
                            }
                        },
                    }
                },
                include: {
                    Accounts: true,
                }
            });
            return user_entity_1.UserEntity.fromObject(deletecontact);
        });
    }
}
exports.UserDataSourceInfra = UserDataSourceInfra;
