"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUsers = void 0;
class GetUsers {
    constructor(repostory) {
        this.repostory = repostory;
    }
    execute() {
        return this.repostory.getAll();
    }
}
exports.GetUsers = GetUsers;
