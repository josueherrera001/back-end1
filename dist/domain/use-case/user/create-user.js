"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUser = void 0;
class CreateUser {
    constructor(repository) {
        this.repository = repository;
    }
    execute(dto, auth) {
        return this.repository.create(dto, auth);
    }
}
exports.CreateUser = CreateUser;
