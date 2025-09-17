import { JsonObject } from "@prisma/client/runtime/library";
import { ErrorSpecific } from "../../../helpers";

export class CreateSubMenuDto{
    constructor(
        public readonly MenuId: string,
        public readonly Name: string,
        public readonly Url: string,
        public readonly Description: string
    ){}

    get Values(){
        const returnObj:{[key: string]:any} ={};

        if ( this.MenuId )  returnObj.MenuId = this.MenuId;
        if ( this.Name )  returnObj.Name = this.Name;
        if ( this.Url )  returnObj.Url = this.Url;  
        if ( this.Description )  returnObj.Description = this.Description;      

        return returnObj;
    }

    static create(props:{[key:string]:any}):[JsonObject?,CreateSubMenuDto?]{
        const{MenuId,Name, Url, Description } = props;

        if ( !MenuId ) return [ErrorSpecific.ErrorEmpty('Debe seleccionar el menu primero'),undefined]; 
        if ( !Name ) return [ErrorSpecific.ErrorEmpty('Debe ingresar el nombre del menu'),undefined];    

        return [undefined, new CreateSubMenuDto(MenuId,Name, Url, Description )]
    }
}