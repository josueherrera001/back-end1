"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = void 0;
class Login {
    constructor(repository) {
        this.repository = repository;
    }
    execute(dto) {
        return this.repository.Login(dto);
    }
}
exports.Login = Login;
