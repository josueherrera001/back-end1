"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateContact = void 0;
class CreateContact {
    constructor(repostory) {
        this.repostory = repostory;
    }
    execute(dto) {
        return this.repostory.create(dto);
    }
}
exports.CreateContact = CreateContact;
