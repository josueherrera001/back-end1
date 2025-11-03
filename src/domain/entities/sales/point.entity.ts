export class PointEntity{
    constructor(
        public readonly Id: string,
        public readonly SaleId: string,
        public readonly AccountId: string,
        public readonly Point: bigint,
        public readonly ExpiredDatePoint: Date
    ){}

    public static fromObject (object:{[key: string]:any}){
        
        const{Id, SaleId, AccountId, Point, ExpiredDatePoint} = object;          
        return new PointEntity(Id, SaleId, AccountId, Point, ExpiredDatePoint );
    }   
}