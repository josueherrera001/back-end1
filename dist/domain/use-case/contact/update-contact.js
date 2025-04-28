"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateContact = void 0;
class UpdateContact {
    constructor(repostory) {
        this.repostory = repostory;
    }
    execute(dto) {
        return this.repostory.updateById(dto);
    }
}
exports.UpdateContact = UpdateContact;
