import { JsonObject } from "@prisma/client/runtime/library";
import { ErrorSpecific } from "../../../helpers";

export class CreateSupplierDto{
    constructor(
        public readonly CompanyName: string,
        public readonly Address:string,
        public readonly Phone: string,
        public readonly Email?:string,
        public readonly Web?: string
    ){}

    get Values(){
        const returnObj:{[key: string]:any} ={};

        if ( this.CompanyName )  returnObj.CompanyName = this.CompanyName;
        if ( this.Address )  returnObj.Address = this.Address;
        if ( this.Email )  returnObj.Email = this.Email;
        if ( this.Phone )  returnObj.Phone = this.Phone;
       

        return returnObj;
    }

    static create(props:{[key:string]:any}):[JsonObject?,CreateSupplierDto?]{
        
        const{CompanyName, Address, Email, Phone, Web} = props;

        if ( !CompanyName ) return [ErrorSpecific.ErrorEmpty('Debe ingresar la razon social del proveedor'),undefined];
        if ( !Address ) return [ErrorSpecific.ErrorEmpty('Debe ingresar la direccion del proveedor'), undefined];
        if ( !Phone ) return [ErrorSpecific.ErrorEmpty('Debe ingresar el telefono del proveedor')];

        return [undefined, new CreateSupplierDto(CompanyName, Address, Phone, Email, Web )]
    }
}