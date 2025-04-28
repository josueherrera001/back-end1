"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAuthDto = void 0;
const bcrypt_adapter_1 = require("../../../config/bcrypt.adapter");
class UpdateAuthDto {
    constructor(id, OldUserPass, ActiveUserPass, UserPass) {
        this.id = id;
        this.OldUserPass = OldUserPass;
        this.ActiveUserPass = ActiveUserPass;
        this.UserPass = UserPass;
    }
    get Values() {
        const returnObj = {};
        if (this.id)
            returnObj.id = this.id;
        if (this.OldUserPass)
            returnObj.UserName = this.OldUserPass;
        if (this.ActiveUserPass)
            returnObj.UserName = this.ActiveUserPass;
        if (this.UserPass)
            returnObj.UserPass = this.UserPass;
        return returnObj;
    }
    static update(props) {
        const { id, OldUserPass, ActiveUserPass, UserPass } = props;
        if (id)
            return ['Debe seleccionar el usuario a modificar', undefined];
        if (OldUserPass)
            return ['Debe debe ingresar la actual contraseña', undefined];
        const isMatching = bcrypt_adapter_1.bcryptAdapter.compare(OldUserPass, ActiveUserPass);
        if (isMatching)
            return ['La contraseña actual no es correcto', undefined];
        if (UserPass)
            return ['Debe ingresar la nueva contraseña del usuario', undefined];
        if (UserPass < 8 && UserPass > 20)
            return ['La contraseña nueva debe contener como minimo 8 y maximo 20 caracteres', undefined];
        return [undefined, new UpdateAuthDto(id, OldUserPass, ActiveUserPass, UserPass)];
    }
}
exports.UpdateAuthDto = UpdateAuthDto;
