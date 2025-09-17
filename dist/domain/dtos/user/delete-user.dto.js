"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUserDto = void 0;
const helpers_1 = require("../../../helpers");
class DeleteUserDto {
    constructor(Id) {
        this.Id = Id;
    }
    get Values() {
        const returnObj = {};
        if (this.Id)
            returnObj.Id = this.Id;
        return returnObj;
    }
    static create(props) {
        const { Id } = props;
        if (!Id)
            return [helpers_1.ErrorSpecific.ErrorEmpty('Debe seleccionar la persona que desee eliminar'), undefined];
        return [undefined, new DeleteUserDto(Id)];
    }
}
exports.DeleteUserDto = DeleteUserDto;
