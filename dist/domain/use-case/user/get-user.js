"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUser = void 0;
class GetUser {
    constructor(repostory) {
        this.repostory = repostory;
    }
    execute(id) {
        return this.repostory.findById(id);
    }
}
exports.GetUser = GetUser;
