"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserDto = void 0;
const regular_exps_1 = require("../../../config/regular-exps");
const create_address_dto_1 = require("../address/create-address.dto");
const register_auth_dto_1 = require("../Auth/register-auth.dto");
const helpers_1 = require("../../../helpers");
class CreateUserDto {
    constructor(FirstName, LastName, Email, Phone, CreatedDate, auth, Address) {
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Email = Email;
        this.Phone = Phone;
        this.CreatedDate = CreatedDate;
        this.auth = auth;
        this.Address = Address;
    }
    get Values() {
        const returnObj = {};
        if (this.FirstName)
            returnObj.FirstName = this.FirstName;
        if (this.LastName)
            returnObj.LastName = this.LastName;
        if (this.Email)
            returnObj.Email = this.Email;
        if (this.Phone)
            returnObj.Phone = this.Phone;
        if (this.CreatedDate)
            returnObj.CreatedDate = this.CreatedDate;
        if (this.auth)
            returnObj.auth = this.auth;
        if (this.Address)
            returnObj.Address = this.Address;
        return returnObj;
    }
    static create(props) {
        const { FirstName, LastName, Email, Phone, CreatedDate, auth, Address } = props;
        if (!FirstName)
            return [helpers_1.ErrorSpecific.ErrorEmpty('Debe ingresar el nombre de la persona'), undefined];
        if (!LastName)
            return [helpers_1.ErrorSpecific.ErrorEmpty('Debe ingresar el apellido de la persona'), undefined];
        if (!Address)
            return [helpers_1.ErrorSpecific.ErrorEmpty('Debe ingresar la direccion de la persona'), undefined];
        if (!Email)
            return [helpers_1.ErrorSpecific.ErrorEmpty('Debe ingresar el correo de la persona'), undefined];
        if (!regular_exps_1.regularExps.email.test(Email))
            return [helpers_1.ErrorSpecific.ErrorEmpty('El correo no es valido'), undefined];
        if (!Phone)
            return [helpers_1.ErrorSpecific.ErrorEmpty('Debe ingresar el telefono')];
        const [error, CreateDto] = register_auth_dto_1.RegisterAuthDto.create(auth);
        if (error)
            return [error, undefined];
        const [errorAddress, AddressDto] = create_address_dto_1.CreateAddressDto.create(Address);
        if (errorAddress)
            return [error, undefined];
        return [undefined, new CreateUserDto(FirstName, LastName, Email, Phone, CreatedDate, auth, Address)];
    }
}
exports.CreateUserDto = CreateUserDto;
