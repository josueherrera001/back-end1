"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntity = void 0;
class UserEntity {
    constructor(Id, FirstName, LastName, Address, Email, Phone, PhoneNumber, Accounts, Addresses) {
        this.Id = Id;
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Address = Address;
        this.Email = Email;
        this.Phone = Phone;
        this.PhoneNumber = PhoneNumber;
        this.Accounts = Accounts;
        this.Addresses = Addresses;
    }
    static fromObject(object) {
        const { Id, FirstName, LastName, Address, Email, PhoneNumber, Phone, Accounts, Addresses } = object;
        return new UserEntity(Id, FirstName, LastName, Address, Email, PhoneNumber, Phone, Accounts, Addresses);
    }
}
exports.UserEntity = UserEntity;
