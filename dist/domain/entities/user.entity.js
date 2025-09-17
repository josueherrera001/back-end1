"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntity = void 0;
class UserEntity {
    constructor(Id, FirstName, LastName, Address, Email, Phone, Accounts) {
        this.Id = Id;
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Address = Address;
        this.Email = Email;
        this.Phone = Phone;
        this.Accounts = Accounts;
    }
    static fromObject(object) {
        const { Id, FirstName, LastName, Address, Email, Phone, Accounts } = object;
        return new UserEntity(Id, FirstName, LastName, Address, Email, Phone, Accounts);
    }
}
exports.UserEntity = UserEntity;
