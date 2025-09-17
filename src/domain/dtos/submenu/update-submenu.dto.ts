import { JsonObject } from "@prisma/client/runtime/library";
import { ErrorSpecific } from "../../../helpers";

export class UpdateSubMenuDto{
    constructor(
        public readonly Id: string,
        public readonly MenuId: string,
        public readonly Name: string,
        public readonly Url: string,
        public readonly Description: string
    ){}

    get Values(){
        const returnObj:{[key: string]:any} ={};

        if ( this.Id )  returnObj.Id = this.Id;
        if ( this.MenuId )  returnObj.MenuId = this.MenuId;
        if ( this.Name )  returnObj.Name = this.Name;
        if ( this.Url )  returnObj.Url = this.Url;  
        if ( this.Description )  returnObj.Description = this.Description;      

        return returnObj;
    }

    static update(props:{[key:string]:any}):[JsonObject?,UpdateSubMenuDto?]{
        const{Id,MenuId ,Name, Url, HasSubMenu, Description } = props;
        
        if ( !Id )   return [ErrorSpecific.ErrorEmpty('Debe seleccionar el sub menu a modificar'),undefined];
        if ( !MenuId ) return [ErrorSpecific.ErrorEmpty('Debe seleccionar el menu primero'),undefined]; 
        if ( !Name ) return [ErrorSpecific.ErrorEmpty('Debe ingresar el nombre del sub menu'),undefined];
        if ( !HasSubMenu && !Url ) return [ErrorSpecific.ErrorEmpty('Debe ingresar el enlace del sub menu'),undefined];      

        return [undefined, new UpdateSubMenuDto(Id, MenuId,Name, Url, Description )]
    }
}