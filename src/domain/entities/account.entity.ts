import { AccountMenuEntity } from "./AccountMenuEntity";
import { RoleEntity } from "./role.entity";
import { UserEntity } from "./user.entity";

export class AccountEntity{
    constructor(
        public readonly Id: string,
        public readonly UserId: string,
        public readonly RoleId: string,
        public readonly UserName: string,
        public readonly User?: UserEntity,
        public readonly Role?: RoleEntity,
        public readonly AccountMenu?: AccountMenuEntity[]
    ){}

    public static fromObject (object:{[key: string]:any}){
        const{Id, UserId, RoleId, UserName, User, Role,AccountMenu} = object;    
        return new AccountEntity(
            Id, UserId,RoleId, UserName,User ? UserEntity.fromObject(User) : undefined, 
            Role ? RoleEntity.fromObject(Role) : undefined, AccountMenu ? AccountMenu.map( (am:any) => AccountMenuEntity.fromObject(am)) : undefined
        );
    }
}