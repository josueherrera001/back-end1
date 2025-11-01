import { JsonObject } from "@prisma/client/runtime/library";
import { ErrorSpecific } from "../../../helpers";

export class UpdateUserDto{
    constructor(
        public readonly Id: string,
        public readonly FirstName: string,
        public readonly LastName: string,
        public readonly Phone: string,
        public readonly address?: {  
            Country: string;  
            Province: string;  
            Location: string;  
            Street: string;  
            Number: string;  
            Between?: string;  
        }  
    ){}

    get Values(){
        const returnObj:{[key: string]:any} ={};

        if ( this.FirstName )  returnObj.FirstName = this.FirstName;
        if ( this.LastName )  returnObj.LastName = this.LastName;
        if ( this.Phone )  returnObj.Phone = this.Phone;
        if ( this.address ) {  
            returnObj.Addresses = {  
                updateMany: {  
                    where: {  
                        UserId: this.Id  
                    },  
                    data: {  
                        Country: this.address.Country,  
                        Province: this.address.Province,  
                        Location: this.address.Location,  
                        Street: this.address.Street,  
                        Number: this.address.Number,  
                        Between: this.address.Between || ''  
                    }  
                }  
            };  
        }  
        return returnObj;
    }

    static update(props:{[key:string]:any}):[JsonObject?,UpdateUserDto?]{
        const{id:Id,FirstName, LastName, Phone, address } = props;
        
        if ( !Id ) return [ErrorSpecific.ErrorEmpty('Debe seleccionar el usuario a modificar'),undefined];
        if ( !FirstName ) return [ErrorSpecific.ErrorEmpty('Debe ingresar el nombre de la persona'),undefined];
        if ( !LastName ) return [ErrorSpecific.ErrorEmpty('Debe ingresar el apellido de la persona'),undefined];
        if ( !Phone ) return [ErrorSpecific.ErrorEmpty('Debe ingresar el telefono'),undefined];

        return [undefined, new UpdateUserDto(Id,FirstName, LastName, Phone, address )]
    }
}