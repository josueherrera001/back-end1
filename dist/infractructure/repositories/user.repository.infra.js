"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepositoryInfra = void 0;
class UserRepositoryInfra {
    constructor(datasource) {
        this.datasource = datasource;
    }
    create(createTodoDto, auth) {
        return this.datasource.create(createTodoDto, auth);
    }
    getAll() {
        return this.datasource.getAll();
    }
    findById(id) {
        return this.datasource.findById(id);
    }
    updateById(updateTodoDto) {
        return this.datasource.updateById(updateTodoDto);
    }
    deleteById(id) {
        return this.datasource.deleteById(id);
    }
}
exports.UserRepositoryInfra = UserRepositoryInfra;
