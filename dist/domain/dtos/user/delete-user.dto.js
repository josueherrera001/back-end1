"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUserDto = void 0;
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
            return ['Debe seleccionar la persona que desee eliminar', undefined];
        return [undefined, new DeleteUserDto(Id)];
    }
}
exports.DeleteUserDto = DeleteUserDto;
