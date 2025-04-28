"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginEntity = void 0;
const custom_error_1 = require("../error/custom.error");
class LoginEntity {
    constructor(token, UserName) {
        this.token = token;
        this.UserName = UserName;
    }
    static fromObject(object) {
        const { token, UserName } = object;
        if (!token)
            throw custom_error_1.CustomError.badRequest('Token invalido');
        if (!UserName)
            throw custom_error_1.CustomError.badRequest('Falta el nombre del usuario');
        return new LoginEntity(token, UserName);
    }
}
exports.LoginEntity = LoginEntity;
