export class CreatePointDto{
    constructor(
        public readonly SaleId: string,
        public readonly AccountId: string,
        public readonly Point: bigint,
        public readonly ExpiredDatePoint: Date
    ){}

    public get values(){
        const returnObj:{[key:string]:any} ={};

        if ( this.SaleId ) returnObj.SaleId = this.SaleId;
        if ( this.AccountId ) returnObj.AccountId = this.AccountId;
        if ( this.Point ) returnObj.Point = this.Point;
        if ( this.ExpiredDatePoint ) returnObj.ExpiredDatePoint = this.ExpiredDatePoint;

        return returnObj;
    }

    public static create(props:{[key:string]:any}):[any?, CreatePointDto?]{
        const { SaleId, AccountId, Point, ExpiredDatePoint } = props;   

        if (!SaleId) return [ 'Debe ingresar el Id de la venta', undefined];
        if (!AccountId) return [ 'Debe ingresar el Id de la cuenta', undefined];
        if (!Point) return [ 'Debe ingresar los puntos obtenidos', undefined];
        if (!ExpiredDatePoint) return [ 'Debe ingresar la fecha de vencimiento de los puntos', undefined]; 
         
        return [undefined, new CreatePointDto(SaleId, AccountId, BigInt(Point), new Date(ExpiredDatePoint))];
    }
}