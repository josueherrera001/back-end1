import { SaleDetailEntity } from "./saledatail.entity";


export class SaleEntity{
    constructor(
        public readonly Id: string,
        public readonly AccountId: string, 
        public readonly InvoiceCode: string,
        public readonly IsOnline: boolean,
        public readonly Total: number,
        public readonly FinalizeSale: boolean,
        public readonly SaleType: string,
        public readonly OpenWorkTurnId: string,
        public readonly Detail: SaleDetailEntity[]
    ){}

    public static fromObject (object:{[key: string]:any}){
        
        const{Id, AccountId, InvoiceCode, IsOnline, Total, FinalizeSale, SaleType, OpenWorkTurnId, Detail} = object;          
        return new SaleEntity(Id, AccountId, InvoiceCode, IsOnline, Total, FinalizeSale, SaleType, OpenWorkTurnId, Detail );
    }
}