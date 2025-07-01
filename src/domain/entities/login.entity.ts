
export class LoginEntity{
    constructor(
        public readonly token:string,
        public readonly UserName: string
    ){ }

    static fromObject(object:{[key:string]:any}){
        const{ token, UserName} = object;

        return new LoginEntity( token,UserName);
    }
}