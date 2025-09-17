"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteAddressDto = void 0;
const helpers_1 = require("../../../helpers");
class DeleteAddressDto {
    constructor(Id) {
        this.Id = Id;
    }
    get Values() {
        const returnObj = {};
        if (this.Id)
            returnObj.Id = this.Id;
        return returnObj;
    }
    static delete(props) {
        const { Id } = props;
        if (!Id)
            return [helpers_1.ErrorSpecific.ErrorEmpty('Debe seleccionar el telefono que desee eliminar'), undefined];
        return [undefined, new DeleteAddressDto(Id)];
    }
}
exports.DeleteAddressDto = DeleteAddressDto;
