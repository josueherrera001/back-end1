import { AccountMenuEntity } from "./AccountMenuEntity";
import { MenuEntity } from "./menu.entity";
import { SubMenuEntity } from "./submenu.entity";

export class AccountMenuItemEntity{
    constructor(
        public readonly Id: string,
        public readonly UserId: string,
        public readonly RoleId: string,
        public readonly UserName: string,

        public readonly AccountMenu: AccountMenuEntity,
        // public readonly subMenu: SubMenuEntity[],
        // public readonly menu: MenuEntity
    ){}

    public static fromObject (object:{[key: string]:any}){
        const{Id, UserId, RoleId, UserName,AccountMenu } = object;         
        return new AccountMenuItemEntity(Id, UserId,RoleId, UserName, AccountMenu);
    }
}