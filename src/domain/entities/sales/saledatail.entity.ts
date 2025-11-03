export class SaleDetailEntity{
    constructor(
        public readonly Id: string,
        public readonly SaleId: string,
        public readonly ProductId: string,
        public readonly Quantity: number,
        public readonly UnitPrice: bigint
    ){}

    public static fromObject (object:{[key: string]:any}){
        
        const{Id, SaleId, ProductId, Quantity, UnitPrice} = object;          
        return new SaleDetailEntity(Id, SaleId, ProductId, Quantity, UnitPrice );
    }
}