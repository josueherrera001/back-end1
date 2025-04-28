"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntity = void 0;
const custom_error_1 = require("../error/custom.error");
class UserEntity {
    constructor(Id, FirstName, LastName, Address, Email, 
    // public readonly emailValidated:boolean,
    Phone, Accounts) {
        this.Id = Id;
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Address = Address;
        this.Email = Email;
        this.Phone = Phone;
        this.Accounts = Accounts;
    }
    static fromObject(object) {
        const { Id, _id, FirstName, LastName, Address, Email /*, emailValidated*/, Phone, Accounts } = object;
        if (!_id && !Id)
            throw custom_error_1.CustomError.badRequest('Falta la identificacion de la persona');
        if (!FirstName)
            throw custom_error_1.CustomError.badRequest('Falta ingresar el nombre de la persona');
        if (!LastName)
            throw custom_error_1.CustomError.badRequest('Falta ingresar el nombre de la persona');
        if (!Address)
            throw custom_error_1.CustomError.badRequest('Falta ingresar la direccion de la persona');
        if (!Email)
            throw custom_error_1.CustomError.badRequest('Falta de ingresar el correo de la persona');
        // if( emailValidated === undefined )throw CustomError.badRequest('El correo no es valido');
        if (!Phone)
            throw custom_error_1.CustomError.badRequest('Falta de ingresar el telefono');
        return new UserEntity(_id || Id, FirstName, LastName, Address, Email /*, emailValidated*/, Phone, Accounts);
    }
}
exports.UserEntity = UserEntity;
