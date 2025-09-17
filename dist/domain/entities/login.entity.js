"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginEntity = void 0;
class LoginEntity {
    constructor(token, UserName) {
        this.token = token;
        this.UserName = UserName;
    }
    static fromObject(object) {
        const { token, UserName } = object;
        return new LoginEntity(token, UserName);
    }
}
exports.LoginEntity = LoginEntity;
