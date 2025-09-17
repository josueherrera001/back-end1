"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginUserDto = void 0;
const helpers_1 = require("../../../helpers");
class LoginUserDto {
    constructor(UserName, Password) {
        this.UserName = UserName;
        this.Password = Password;
    }
    static login(object) {
        const { UserName, Password } = object;
        if (!UserName)
            return [helpers_1.ErrorSpecific.ErrorEmpty('Ingresa el nombre del usuario'), undefined];
        if (!Password)
            return [helpers_1.ErrorSpecific.ErrorEmpty('Ingresa la contraseña'), undefined];
        return [undefined, new LoginUserDto(UserName, Password)];
    }
}
exports.LoginUserDto = LoginUserDto;
