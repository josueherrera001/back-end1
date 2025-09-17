"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactDataSourceInfra = void 0;
const data_1 = require("../../data");
const domain_1 = require("../../domain");
const helpers_1 = require("../../helpers");
class ContactDataSourceInfra {
    create(createContactDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const contact = yield data_1.prisma.contacts.create({
                data: {
                    CreatedDate: new Date(),
                    fullName: createContactDto.fullName,
                    email: createContactDto.email,
                    phone: createContactDto.phone,
                    description: createContactDto.description
                }
            });
            return domain_1.ContactEntity.fromObject(contact);
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const contacts = yield data_1.prisma.contacts.findMany();
            return contacts.map(contact => domain_1.ContactEntity.fromObject(contact));
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const contact = yield data_1.prisma.contacts.findFirst({
                where: {
                    id: id
                }
            });
            if (!contact)
                throw helpers_1.ErrorSpecific.ErrorEmpty(`Id contacto:  ${id} no encontrado`);
            return domain_1.ContactEntity.fromObject(contact);
        });
    }
    updateById(updateContactDto) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.findById(updateContactDto.id);
            const updatedContact = yield data_1.prisma.contacts.update({
                where: {
                    id: updateContactDto.id
                },
                data: updateContactDto.values
            });
            return domain_1.ContactEntity.fromObject(updatedContact);
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.findById(id);
            const deletecontact = yield data_1.prisma.contacts.delete({
                where: {
                    id: id
                }
            });
            return domain_1.ContactEntity.fromObject(deletecontact);
        });
    }
}
exports.ContactDataSourceInfra = ContactDataSourceInfra;
