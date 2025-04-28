"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterAuthDto = void 0;
class RegisterAuthDto {
    constructor(UserName, UserPass, RoleId, UserId = '') {
        this.UserName = UserName;
        this.UserPass = UserPass;
        this.RoleId = RoleId;
        this.UserId = UserId;
    }
    get Values() {
        const returnObj = {};
        if (this.UserName)
            returnObj.UserName = this.UserName;
        if (this.UserPass)
            returnObj.UserPass = this.UserPass;
        if (this.UserId)
            returnObj.UserId = this.UserId;
        if (this.RoleId)
            returnObj.RoleId = this.RoleId;
        return returnObj;
    }
    static create(props) {
        const { UserName, UserPass, RoleId, UserId } = props;
        if (!UserName)
            return ['Debe ingresar el nombre del usuario', undefined];
        if (!UserPass)
            return ['Debe ingresar la contraseña del usuario', undefined];
        if (UserPass < 8 && UserPass > 20)
            return ['La contraseña debe contener como minimo 8 y maximo 20 caracteres', undefined];
        // if ( !UserId )   return ['Debe ingresar el usuario',undefined]
        if (!RoleId)
            return ['Debe ingresar el tipo de aceso del usuario', undefined];
        return [undefined, new RegisterAuthDto(UserName, UserPass, RoleId, UserId)];
    }
}
exports.RegisterAuthDto = RegisterAuthDto;
