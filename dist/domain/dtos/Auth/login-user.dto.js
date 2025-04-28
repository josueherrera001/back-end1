"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginUserDto = void 0;
class LoginUserDto {
    constructor(UserName, Password) {
        this.UserName = UserName;
        this.Password = Password;
    }
    static login(object) {
        const { UserName, Password } = object;
        if (!UserName)
            return ['Ingresa el nombre del usuario', undefined];
        if (!Password)
            return ['Ingresa la contraseña', undefined];
        return [undefined, new LoginUserDto(UserName, Password)];
    }
}
exports.LoginUserDto = LoginUserDto;
