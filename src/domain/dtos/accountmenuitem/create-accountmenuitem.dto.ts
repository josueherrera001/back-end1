import { JsonObject } from "@prisma/client/runtime/library";
import { ErrorSpecific } from "../../../helpers";

export class CreateAccountMenuItemDto{
    constructor(
        public readonly MenuId: string,
        public readonly AccountId: string,
        public readonly SubMenuId: string,
        public readonly AccountMenuId:string
    ){}

    get Values(){
        const returnObj:{[key: string]:any} ={};

        if ( this.MenuId )  returnObj.MenuId = this.MenuId;
        if ( this.AccountId )  returnObj.AccountId = this.AccountId;
        if ( this.SubMenuId )  returnObj.SubMenuId = this.SubMenuId; 
        if ( this.AccountMenuId )  returnObj.AccountMenuId = this.AccountMenuId;      

        return returnObj;
    }

    static create(props:{[key:string]:any}):[JsonObject?,CreateAccountMenuItemDto?]{
        const{MenuId,AccountId, SubMenuId,AccountMenuId } = props;

        if ( !MenuId ) return [ErrorSpecific.ErrorEmpty('Debe seleccionar el menu primero'),undefined]; 
        if ( !AccountId ) return [ErrorSpecific.ErrorEmpty('Debe seleccionar el usuario'),undefined];  
        if ( !SubMenuId ) return [ErrorSpecific.ErrorEmpty('Debe seleccionar el submenu'),undefined];  
        if ( !AccountMenuId ) return [ErrorSpecific.ErrorEmpty('Debe seleccionar la cuenta menu relacionada'),undefined];  

        return [undefined, new CreateAccountMenuItemDto(MenuId,AccountId, SubMenuId,AccountMenuId )]
    }
}