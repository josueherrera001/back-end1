"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUser = void 0;
class DeleteUser {
    constructor(repostory) {
        this.repostory = repostory;
    }
    execute(id) {
        return this.repostory.deleteById(id);
    }
}
exports.DeleteUser = DeleteUser;
