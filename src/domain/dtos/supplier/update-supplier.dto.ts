import { JsonObject } from "@prisma/client/runtime/library";
import { ErrorSpecific } from "../../../helpers";

export class UpdateSupplierDto{
    constructor(
        public readonly Id: string,
        public readonly CompanyName: string,
        public readonly Address:string,
        public readonly Phone: string,
        public readonly Email?:string,
        public readonly Web?: string
    ){}

    get Values(){
        const returnObj:{[key: string]:any} ={};

        if(this.Id) returnObj.Id = this.Id;
        if ( this.CompanyName )  returnObj.CompanyName = this.CompanyName;
        if ( this.Address )  returnObj.Address = this.Address;
        if ( this.Email )  returnObj.Email = this.Email;
        if ( this.Phone )  returnObj.Phone = this.Phone;

        return returnObj;
    }

    static update(props:{[key:string]:any}):[JsonObject?,UpdateSupplierDto?]{
        const{Id,CompanyName, Address, Phone, Email, Web} = props;
        if ( !Id ) return [ErrorSpecific.ErrorEmpty('Debe seleccionar el usuario a modificar'),undefined];
        if ( !CompanyName ) return [ErrorSpecific.ErrorEmpty('Debe ingresar la razon social del proveedor'),undefined];
        if ( !Address ) return [ErrorSpecific.ErrorEmpty('Debe ingresar la direccion del proveedor'), undefined];
        if ( !Phone ) return [ErrorSpecific.ErrorEmpty('Debe ingresar el telefono del proveedor')];

        return [undefined, new UpdateSupplierDto(Id,CompanyName, Address, Phone, Email, Web )]
    }
}