"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetContacts = void 0;
class GetContacts {
    constructor(repostory) {
        this.repostory = repostory;
    }
    execute() {
        return this.repostory.getAll();
    }
}
exports.GetContacts = GetContacts;
