"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUser = void 0;
class UpdateUser {
    constructor(repostory) {
        this.repostory = repostory;
    }
    execute(dto) {
        return this.repostory.updateById(dto);
    }
}
exports.UpdateUser = UpdateUser;
