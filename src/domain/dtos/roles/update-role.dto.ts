import { JsonObject } from "@prisma/client/runtime/library";
import { ErrorSpecific } from "../../../helpers";

export class UpdateRoleDto{
    constructor(
        public readonly Id: string,
        public readonly Name: string,
        public readonly Description: string
    ){}

    get Values(){
        const returnObj:{[key: string]:any} ={};

        if ( this.Id )  returnObj.Id = this.Id;
        if ( this.Name )  returnObj.Name = this.Name;
        if ( this.Description )  returnObj.Description = this.Description;      

        return returnObj;
    }

    static update(props:{[key:string]:any}):[JsonObject?,UpdateRoleDto?]{
        const{Id,Name, Description, Street, StreetNumber, BetweenStreet } = props;
        
        if ( !Id )   return [ErrorSpecific.ErrorEmpty('Debe seleccionar el rol a modificar'),undefined]
        if ( !Name ) return [ErrorSpecific.ErrorEmpty('Debe ingresar el nombre'),undefined];     

        return [undefined, new UpdateRoleDto(Id,Name, Description )]
    }
}