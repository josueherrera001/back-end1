import { Decimal } from "@prisma/client/runtime/library";

export class LotEntity{
    constructor(
        public readonly Id: string,
        public readonly ProductId: string,
        public readonly LotCode: string,
        public readonly ProductCode: string,
        public readonly stock: bigint,
        public readonly PurchasePrice: Decimal,
        public readonly SalePrice: Decimal,
        public readonly ExpiredDate: string,
        public readonly HasExpiredDate: boolean,
        public readonly Description: string
    ){}

    public static fromObject (object:{[key: string]:any}){
        const{Id,ProductId, LotCode, ProductCode,stock,PurchasePrice, SalePrice, ExpiredDate, HasExpiredDate, Description } = object;    

        return new LotEntity(Id, ProductId, LotCode, ProductCode,stock,PurchasePrice, SalePrice, ExpiredDate, HasExpiredDate, Description );
    }
}