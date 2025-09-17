"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactEntity = void 0;
class ContactEntity {
    constructor(id, fullName, email, phone, description) {
        this.id = id;
        this.fullName = fullName;
        this.email = email;
        this.phone = phone;
        this.description = description;
    }
    static fromObject(object) {
        const { id, fullName, email, phone, description } = object;
        return new ContactEntity(id, fullName, email, phone, description);
    }
}
exports.ContactEntity = ContactEntity;
