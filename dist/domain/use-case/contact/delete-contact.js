"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteContact = void 0;
class DeleteContact {
    constructor(repostory) {
        this.repostory = repostory;
    }
    execute(id) {
        return this.repostory.deleteById(id);
    }
}
exports.DeleteContact = DeleteContact;
