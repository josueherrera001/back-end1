import { JsonObject } from "@prisma/client/runtime/library";
import { regularExps } from "../../../config/regular-exps";
import { CreateAddressDto } from "../address/create-address.dto";
import { RegisterAuthDto } from "../Auth/register-auth.dto";
import { ErrorSpecific } from "../../../helpers";

export class CreateUserDto{
    constructor(
        public readonly FirstName: string,
        public readonly LastName: string,
        public readonly Email:string,
        public readonly Phone: string,
        public readonly CreatedDate: Date,
        public readonly auth: RegisterAuthDto,
        public readonly Address:CreateAddressDto,
    ){}

    get Values(){
        const returnObj:{[key: string]:any} ={};

        if ( this.FirstName )  returnObj.FirstName = this.FirstName;
        if ( this.LastName )  returnObj.LastName = this.LastName;
        if ( this.Email )  returnObj.Email = this.Email;
        if ( this.Phone )  returnObj.Phone = this.Phone;
        if ( this.CreatedDate )  returnObj.CreatedDate = this.CreatedDate;
       
        if ( this.auth )  returnObj.auth = this.auth;
        if ( this.Address )  returnObj.Address = this.Address;

        return returnObj;
    }

    static create(props:{[key:string]:any}):[JsonObject?,CreateUserDto?]{
        
        const{FirstName, LastName, Email, Phone,CreatedDate,auth,address } = props;    

        if ( !FirstName ) return [ErrorSpecific.ErrorEmpty('Debe ingresar el nombre de la persona'),undefined];
        if ( !LastName ) return [ErrorSpecific.ErrorEmpty('Debe ingresar el apellido de la persona'),undefined];
        // if ( !Address ) return [ErrorSpecific.ErrorEmpty('Debe ingresar la direccion de la persona'), undefined];
        if ( !Email ) return [ErrorSpecific.ErrorEmpty('Debe ingresar el correo de la persona'), undefined];
        if ( !regularExps.email.test(Email) ) return [ErrorSpecific.ErrorEmpty('El correo no es valido'), undefined];
        if ( !Phone ) return [ErrorSpecific.ErrorEmpty('Debe ingresar el telefono')];

        const [error, CreateDto] = RegisterAuthDto.create(auth);
        if ( error ) return [error,undefined];
        if (!CreateDto) return [ErrorSpecific.ErrorEmpty('Datos de autenticación inválidos'), undefined];

        const [errorAddress, AddressDto] = CreateAddressDto.create(address);
        if ( errorAddress ) return [errorAddress, undefined];
        if ( !AddressDto ) return [ErrorSpecific.ErrorEmpty('Debe ingresar la direccion de la persona'), undefined];

        return [undefined, new CreateUserDto(FirstName, LastName, Email, Phone,CreatedDate,CreateDto, AddressDto )]
    }
}