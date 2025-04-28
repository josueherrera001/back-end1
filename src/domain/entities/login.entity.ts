import { CustomError } from "../../helpers/error/custom.error";

export class LoginEntity{
    constructor(
        public readonly token:string,
        public readonly UserName: string
    ){ }

    static fromObject(object:{[key:string]:any}){
        const{ token, UserName} = object;

        if( !token) throw CustomError.badRequest('Token invalido');
        if( !UserName )throw CustomError.badRequest('Falta el nombre del usuario');

        return new LoginEntity( token,UserName);
    }
}