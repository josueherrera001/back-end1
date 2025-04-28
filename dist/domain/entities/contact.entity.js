"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactEntity = void 0;
class ContactEntity {
    constructor(id, fullName, email, phone, description, completedAt) {
        this.id = id;
        this.fullName = fullName;
        this.email = email;
        this.phone = phone;
        this.description = description;
        this.completedAt = completedAt;
    }
    get isCompleted() {
        return !!this.completedAt;
    }
    static fromObject(object) {
        const { id, fullName, email, phone, description, completedAt } = object;
        if (!id)
            throw 'El id es requrido';
        if (!fullName)
            throw 'Debe ingresar el nombre completo';
        if (!email)
            throw 'Debe ingresar el correo electronico';
        if (!phone)
            throw 'Debe ingresar el numero de telefono';
        let newCompletedAt;
        if (completedAt) {
            newCompletedAt = new Date(completedAt);
            if (isNaN(newCompletedAt.getTime()))
                throw 'La fecha no es valida';
        }
        return new ContactEntity(id, fullName, email, phone, description, completedAt);
    }
}
exports.ContactEntity = ContactEntity;
