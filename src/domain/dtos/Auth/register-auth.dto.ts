import { JsonObject } from "@prisma/client/runtime/library";
import { ErrorSpecific } from "../../../helpers";

export class RegisterAuthDto{
    constructor(
        public readonly UserName:string,
        public readonly UserPass: string,
        public readonly RoleId : string,
        public readonly UserId: string ='',
    ){}

    get Values(){
        const returnObj:{[obj:string]:any} ={};

        if ( this.UserName )  returnObj.UserName = this.UserName;
        if ( this.UserPass )  returnObj.UserPass = this.UserPass;
        if ( this.UserId )   returnObj.UserId = this.UserId;
        if ( this.RoleId )  returnObj.RoleId = this.RoleId;

        return returnObj;
    }

    static create(props:{[key:string]:any}):[JsonObject?, RegisterAuthDto?]{
        const{UserName, UserPass,RoleId,UserId} = props;

        if ( !UserName )  return [ErrorSpecific.ErrorEmpty('Debe ingresar el nombre del usuario'),undefined];
        if ( !UserPass )  return [ErrorSpecific.ErrorEmpty('Debe ingresar la contraseña del usuario'),undefined];
        if ( UserPass < 8 && UserPass > 20 )  return [ErrorSpecific.ErrorEmpty('La contraseña debe contener como minimo 8 y maximo 20 caracteres'),undefined];
        // if ( !UserId )   return ['Debe ingresar el usuario',undefined]
        if ( !RoleId )  return [ErrorSpecific.ErrorEmpty('Debe ingresar el tipo de aceso del usuario'),undefined];

        return [undefined, new RegisterAuthDto(UserName, UserPass,RoleId,UserId)]
    }
}