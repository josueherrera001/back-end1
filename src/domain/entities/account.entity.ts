export class AccountEntity{
    constructor(
        public readonly Id: string,
        public readonly UserId: string,
        public readonly RoleId: string,
        public readonly UserName: string,
    ){}

    public static fromObject (object:{[key: string]:any}){
        const{Id, UserId, RoleId, UserName } = object;    
        return new AccountEntity(Id, UserId,RoleId, UserName );
    }
}