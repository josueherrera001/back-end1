import { JsonObject } from "@prisma/client/runtime/library";
import { ErrorSpecific } from "../../../helpers";

export class CreateMenuDto{
    constructor(
        public readonly Name: string,
        public readonly Url: string,
        public readonly HasSubMenu: boolean,
        public readonly Description: string
    ){}

    get Values(){
        const returnObj:{[key: string]:any} ={};

        if ( this.Name )  returnObj.Name = this.Name;
        if ( this.Url )  returnObj.Url = this.Url;  
        if ( this.HasSubMenu )  returnObj.HasSubMenu = this.HasSubMenu; 
        if ( this.Description )  returnObj.Description = this.Description;      

        return returnObj;
    }

    static create(props:{[key:string]:any}):[JsonObject?,CreateMenuDto?]{
        const{Name, Url, HasSubMenu, Description } = props;

        if ( !Name ) return [ErrorSpecific.ErrorEmpty('Debe ingresar el nombre del menu'),undefined];
        if ( !HasSubMenu && !Url ) return [ErrorSpecific.ErrorEmpty('Debe ingresar el enlace del menu'),undefined];     

        return [undefined, new CreateMenuDto(Name, Url, HasSubMenu, Description )]
    }
}