"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserDto = void 0;
class UpdateUserDto {
    constructor(Id, FirstName, LastName, Phone) {
        this.Id = Id;
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Phone = Phone;
    }
    get Values() {
        const returnObj = {};
        if (this.FirstName)
            returnObj.FirstName = this.FirstName;
        if (this.LastName)
            returnObj.LastName = this.LastName;
        if (this.Phone)
            returnObj.Phone = this.Phone;
        return returnObj;
    }
    static update(props) {
        const { id: Id, FirstName, LastName, Address, Phone } = props;
        if (!Id)
            return ['Debe seleccionar el usuario a modificar', undefined];
        if (!FirstName)
            return ['Debe ingresar el nombre de la persona', undefined];
        if (!LastName)
            return ['Debe ingresar el apellido de la persona', undefined];
        if (!Phone)
            return ['Debe ingresar el telefono'];
        return [undefined, new UpdateUserDto(Id, FirstName, LastName, Phone)];
    }
}
exports.UpdateUserDto = UpdateUserDto;
