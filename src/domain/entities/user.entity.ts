import { LoginEntity } from "./login.entity";

export class UserEntity{
    constructor(
        public readonly Id:string,
        public readonly FirstName: string,
        public readonly LastName: string,
        public readonly Address:string,
        public readonly Email:string,
        public readonly Phone: string,
        public readonly Accounts :LoginEntity[]
    ){ }

    static fromObject(object:{[key:string]:any}){
        const{ Id, FirstName, LastName, Address, Email, Phone,Accounts} = object;

        return new UserEntity( Id,FirstName, LastName, Address, Email, Phone,Accounts);
    }
}