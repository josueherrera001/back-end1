export class SupplierEntity{
    constructor(
        public readonly Id: string,
        public readonly CompanyName: string,
        public readonly Address:string,
        public readonly Phone: string,
        public readonly Email?:string,
        public readonly Web?: string
    ){}

    public static fromObject (object:{[key: string]:any}){
        const{Id,CompanyName, Address, Phone, Email, Web } = object;    

        return new SupplierEntity(Id,CompanyName, Address, Phone, Email, Web );
    }
}