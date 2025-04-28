import { CustomError } from "../../helpers/error/custom.error";
import { LoginEntity } from "./login.entity";

export class UserEntity{
    constructor(
        public readonly Id:string,
        public readonly FirstName: string,
        public readonly LastName: string,
        public readonly Address:string,
        public readonly Email:string,
        // public readonly emailValidated:boolean,
        public readonly Phone: string,
        public readonly Accounts :LoginEntity[]
    ){ }

    static fromObject(object:{[key:string]:any}){
        const{ Id, _id, FirstName, LastName, Address, Email, Phone,Accounts} = object;

        if( !_id && !Id) throw CustomError.badRequest('Falta la identificacion de la persona');
        if( !FirstName )throw CustomError.badRequest('Falta ingresar el nombre de la persona');
        if( !LastName )throw CustomError.badRequest('Falta ingresar el nombre de la persona');
        if( !Address )throw CustomError.badRequest('Falta ingresar la direccion de la persona');
        if( !Email )throw CustomError.badRequest('Falta de ingresar el correo de la persona');
        if( !Phone )throw CustomError.badRequest('Falta de ingresar el telefono');

        return new UserEntity( _id || Id,FirstName, LastName, Address, Email, Phone,Accounts);
    }
}