"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetContact = void 0;
class GetContact {
    constructor(repostory) {
        this.repostory = repostory;
    }
    execute(id) {
        return this.repostory.findById(id);
    }
}
exports.GetContact = GetContact;
