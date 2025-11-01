"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntity = void 0;
class UserEntity {
    constructor(Id, FirstName, LastName, Address, Email, Phone, PhoneNumber, Accounts, Adresses) {
        this.Id = Id;
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Address = Address;
        this.Email = Email;
        this.Phone = Phone;
        this.PhoneNumber = PhoneNumber;
        this.Accounts = Accounts;
        this.Adresses = Adresses;
    }
    static fromObject(object) {
        const { Id, FirstName, LastName, Address, Email, PhoneNumber, Phone, Accounts, Adresses } = object;
        return new UserEntity(Id, FirstName, LastName, Address, Email, PhoneNumber, Phone, Accounts, Adresses);
    }
}
exports.UserEntity = UserEntity;
