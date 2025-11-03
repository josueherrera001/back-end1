import { JsonObject } from "@prisma/client/runtime/library";
import { ErrorSpecific } from "../../../../helpers";

export class UpdatePointDto{
    constructor(
        public readonly Id: string,
        public readonly SaleId: string,
        public readonly AccountId: string,
        public readonly Point: bigint,
        public readonly ExpiredDatePoint: Date
    ){} 

    public get values(){
        const returnObj:{[key:string]:any} ={};

        if ( this.Id ) returnObj.Id = this.Id;
        if ( this.SaleId ) returnObj.SaleId = this.SaleId;
        if ( this.AccountId ) returnObj.AccountId = this.AccountId;
        if ( this.Point ) returnObj.Point = this.Point;
        if ( this.ExpiredDatePoint ) returnObj.ExpiredDatePoint = this.ExpiredDatePoint;

        return returnObj;
    }

    public static create(props:{[key:string]:any}):[JsonObject?, UpdatePointDto?]{
        const { Id, SaleId, AccountId, Point, ExpiredDatePoint } = props;

        if (!Id) return [ ErrorSpecific.ErrorEmpty('Debe ingresar el Id del punto'), undefined];
        if (!SaleId) return [ ErrorSpecific.ErrorEmpty('Debe ingresar el Id de la venta'), undefined];
        if (!AccountId) return [ ErrorSpecific.ErrorEmpty('Debe ingresar el Id de la cuenta'), undefined];
        if (!Point) return [ ErrorSpecific.ErrorEmpty('Debe ingresar los puntos obtenidos'), undefined];
        if (!ExpiredDatePoint) return [ ErrorSpecific.ErrorEmpty('Debe ingresar la fecha de vencimiento de los puntos'), undefined]; 

        return [undefined, new UpdatePointDto(Id, SaleId, AccountId, BigInt(Point), new Date(ExpiredDatePoint))];
    }
}