"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangePassword = void 0;
class ChangePassword {
    constructor(repository) {
        this.repository = repository;
    }
    execute(dto) {
        return this.repository.ChangePass(dto);
    }
}
exports.ChangePassword = ChangePassword;
