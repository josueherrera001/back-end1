import { JsonObject } from "@prisma/client/runtime/library";
import { ErrorSpecific } from "../../../helpers";

export class CreateContactDto {
    constructor( 
        public readonly fullName: string,
        public readonly email: string,
        public readonly phone: string,
        public readonly description?: string
    ){}

    get values(){
        const returnObj: {[key:string]: any } = {};

        if ( this.fullName ) returnObj.fullName = this.fullName;
        if ( this.email ) returnObj.email = this.email;
        if ( this.phone ) returnObj.phone = this.phone;

        return returnObj;
    }

    static create(props:{[key:string]:any}):[JsonObject?, CreateContactDto?]{
        const { fullName,email,phone,description } = props;

        if( !fullName ) return [ErrorSpecific.ErrorEmpty('Debe ingresar el nombre completo'), undefined]
        if( !email ) return [ErrorSpecific.ErrorEmpty('Debe ingresar el correo electronico'), undefined]
        if( !phone ) return [ErrorSpecific.ErrorEmpty('Debe ingresar el numero de telefono'), undefined]

        return [undefined, new CreateContactDto( fullName,email,phone,description )];
    }
}