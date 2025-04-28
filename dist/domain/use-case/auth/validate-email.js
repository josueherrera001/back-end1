"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateEmail = void 0;
class ValidateEmail {
    constructor(repository) {
        this.repository = repository;
    }
    execute(token) {
        return this.repository.validateEmail(token);
    }
}
exports.ValidateEmail = ValidateEmail;
