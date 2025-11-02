import { AccountMenuEntity } from "./AccountMenuEntity";
import { MenuEntity } from "./menu.entity";
import { RoleEntity } from "./role.entity";
import { SubMenuEntity } from "./submenu.entity";
import { UserEntity } from "./user.entity";

export class AccountMenuItemEntity{
    constructor(
        public readonly Id: string,
        public readonly UserId: string,
        public readonly RoleId: string,
        public readonly UserName: string,

        public readonly AccountMenu: AccountMenuEntity,
        public readonly User: UserEntity,
        public readonly Role: RoleEntity,
    ){}

    public static fromObject (object:{[key: string]:any}){
        const{Id, UserId, RoleId, UserName,AccountMenu,User,Role } = object;         
        return new AccountMenuItemEntity(Id, UserId,RoleId, UserName, AccountMenu,User,Role);
    }
}