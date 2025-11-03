import { JsonObject } from "swagger-ui-express";
import { ErrorSpecific } from "../../../../helpers";
import { CreateSaleDetailDto } from "../saledetail/create-sale-detail.dto";

export class CreateSaleDto{
    constructor(
        public readonly AccountId: string, 
        public readonly InvoiceCode: string,
        public readonly IsOnline: boolean,
        public readonly Total: number,
        public readonly FinalizeSale: boolean,
        public readonly SaleType: string,
        public readonly OpenWorkTurnId?: string,
        public readonly Detail?: CreateSaleDetailDto
    ){}

    public get values(){
        const returnObj:{[key:string]:any} ={};
        if ( this.AccountId ) returnObj.AccountId = this.AccountId;
        if ( this.InvoiceCode ) returnObj.InvoiceCode = this.InvoiceCode;
        if ( this.IsOnline !== undefined ) returnObj.IsOnline = this.IsOnline;
        if ( this.Total !== undefined ) returnObj.Total = this.Total;
        if ( this.FinalizeSale !== undefined ) returnObj.FinalizeSale = this.FinalizeSale;
        if ( this.SaleType ) returnObj.SaleType = this.SaleType;
        if ( this.OpenWorkTurnId ) returnObj.OpenWorkTurnId = this.OpenWorkTurnId;
        if ( this.Detail ) returnObj.Detail = this.Detail;

        return returnObj;
    }

    public static create(props:{[key:string]:any}):[JsonObject?, CreateSaleDto?]{
        const { AccountId, InvoiceCode, IsOnline, Total, FinalizeSale, SaleType, Detail, OpenWorkTurnId } = props;

        if (!AccountId) return [ErrorSpecific.ErrorEmpty('Debe seleccionar la cuenta para la venta'), undefined];
        if (!InvoiceCode) return [ErrorSpecific.ErrorEmpty('Debe ingresar el codigo de la factura'), undefined];
        if ( IsOnline === undefined ) return [ErrorSpecific.ErrorEmpty('Debe especificar si la venta es online o presencial'), undefined];
        if ( Total === undefined ) return [ErrorSpecific.ErrorEmpty('Debe ingresar el total de la venta'), undefined];
        if ( FinalizeSale === undefined ) return [ErrorSpecific.ErrorEmpty('Debe especificar si la venta se finaliza o no'), undefined];
        if (!SaleType) return [ErrorSpecific.ErrorEmpty('Debe ingresar el tipo de venta'), undefined]; 

        const [detailError, detailDto] = CreateSaleDetailDto.create(Detail || {});
        if (detailError) return [detailError, undefined];

        return [undefined, new CreateSaleDto(AccountId, InvoiceCode, IsOnline, Total, FinalizeSale, SaleType, OpenWorkTurnId, detailDto)];
    }
}