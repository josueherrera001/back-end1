import { JsonObject } from "@prisma/client/runtime/library";
import { ErrorSpecific } from "../../../helpers";

export class UpdateAccountMenuItemDto{
    constructor(
        public readonly Id: string,
        public readonly MenuId: string,
        public readonly AccountId: string,
        public readonly SubMenuId: string,
        public readonly AccountMenuId: string
    ){}

    get Values(){
        const returnObj:{[key: string]:any} ={};

        if ( this.Id )  returnObj.Id = this.Id;
        if ( this.MenuId )  returnObj.MenuId = this.MenuId;
        if ( this.AccountId )  returnObj.AccountId = this.AccountId;
        if ( this.SubMenuId )  returnObj.SubMenuId = this.SubMenuId;  
        if ( this.AccountMenuId )  returnObj.AccountMenuId = this.AccountMenuId;      

        return returnObj;
    }

    static update(props:{[key:string]:any}):[JsonObject?,UpdateAccountMenuItemDto?]{
        const{Id,MenuId ,AccountId, AccountMenuId, SubMenuId } = props;
        
        if ( !Id )   return [ErrorSpecific.ErrorEmpty('Debe seleccionar el sub menu a modificar'),undefined];
        if ( !MenuId ) return [ErrorSpecific.ErrorEmpty('Debe seleccionar el menu primero'),undefined]; 
        if ( !AccountId ) return [ErrorSpecific.ErrorEmpty('Debe seleccion el usuario'),undefined];
        if ( !SubMenuId) return [ErrorSpecific.ErrorEmpty('Debe seleccionar el submenu'),undefined]; 
        if ( !AccountMenuId) return [ErrorSpecific.ErrorEmpty('Debe la relacion de usuario y menu'),undefined];      

        return [undefined, new UpdateAccountMenuItemDto(Id, MenuId,AccountId, SubMenuId, AccountMenuId  )]
    }
}