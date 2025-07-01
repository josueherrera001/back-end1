import { JsonObject } from "@prisma/client/runtime/library";
import { ErrorSpecific } from "../../../helpers";

export class CreateRoleDto{
    constructor(
        public readonly Name: string,
        public readonly Description: string
    ){}

    get Values(){
        const returnObj:{[key: string]:any} ={};

        if ( this.Name )  returnObj.Name = this.Name;
        if ( this.Description )  returnObj.Description = this.Description;       

        return returnObj;
    }

    static create(props:{[key:string]:any}):[JsonObject?,CreateRoleDto?]{
        const{Name, Description } = props;

        if ( !Name ) return [ErrorSpecific.ErrorEmpty('Debe ingresar el nombre del menu'),undefined];      

        return [undefined, new CreateRoleDto(Name, Description )]
    }
}