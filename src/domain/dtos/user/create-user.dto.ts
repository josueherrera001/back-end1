import { regularExps } from "../../../config/regular-exps";
import { CreateAddressDto } from "../address/create-address.dto";
import { RegisterAuthDto } from "../Auth/register-auth.dto";

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

    static create(props:{[key:string]:any}):[string?,CreateUserDto?]{
        
        const{FirstName, LastName, Email, Phone,CreatedDate,auth,Address } = props;

        if ( !FirstName ) return ['Debe ingresar el nombre de la persona',undefined];
        if ( !LastName ) return ['Debe ingresar el apellido de la persona',undefined];
        if ( !Address ) return ['Debe ingresar la direccion de la persona', undefined];
        if ( !Email ) return ['Debe ingresar el correo de la persona', undefined];
        if ( !regularExps.email.test(Email) ) return ['El correo no es valido', undefined];
        if ( !Phone ) return ['Debe ingresar el telefono'];

        const [error, CreateDto] = RegisterAuthDto.create(auth);
        if ( error ) return [error,undefined];
        const [errorAddress, AddressDto] = CreateAddressDto.create(Address);
        if ( errorAddress ) return [error,undefined];

        return [undefined, new CreateUserDto(FirstName, LastName, Email, Phone,CreatedDate,auth, Address )]
    }
}