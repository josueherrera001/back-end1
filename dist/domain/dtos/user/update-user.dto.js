"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserDto = void 0;
const helpers_1 = require("../../../helpers");
class UpdateUserDto {
    constructor(Id, FirstName, LastName, Phone, address) {
        this.Id = Id;
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Phone = Phone;
        this.address = address;
    }
    get Values() {
        const returnObj = {};
        if (this.FirstName)
            returnObj.FirstName = this.FirstName;
        if (this.LastName)
            returnObj.LastName = this.LastName;
        if (this.Phone)
            returnObj.Phone = this.Phone;
        if (this.address) {
            returnObj.Addresses = {
                updateMany: {
                    where: {
                        UserId: this.Id
                    },
                    data: {
                        Country: this.address.Country,
                        Province: this.address.Province,
                        Location: this.address.Location,
                        Street: this.address.Street,
                        Number: this.address.Number,
                        Between: this.address.Between || ''
                    }
                }
            };
        }
        return returnObj;
    }
    static update(props) {
        const { id: Id, FirstName, LastName, Phone, address } = props;
        if (!Id)
            return [helpers_1.ErrorSpecific.ErrorEmpty('Debe seleccionar el usuario a modificar'), undefined];
        if (!FirstName)
            return [helpers_1.ErrorSpecific.ErrorEmpty('Debe ingresar el nombre de la persona'), undefined];
        if (!LastName)
            return [helpers_1.ErrorSpecific.ErrorEmpty('Debe ingresar el apellido de la persona'), undefined];
        if (!Phone)
            return [helpers_1.ErrorSpecific.ErrorEmpty('Debe ingresar el telefono'), undefined];
        return [undefined, new UpdateUserDto(Id, FirstName, LastName, Phone, address)];
    }
}
exports.UpdateUserDto = UpdateUserDto;
