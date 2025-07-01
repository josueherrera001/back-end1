import { Decimal, JsonObject } from "@prisma/client/runtime/library";
import { ErrorSpecific } from "../../../helpers";

export class UpdateLotDto{
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

    get Values(){
        const returnObj:{[key: string]:any} ={};

        if ( this.Id )  returnObj.Id = this.Id; 
        if (this.ProductId) returnObj.ProductId = this.ProductId;
        if ( this.LotCode ) returnObj.LotCode = this.LotCode;
        if ( this.ProductCode )  returnObj.ProductCode = this.ProductCode;
        if ( this.ExpiredDate ) returnObj.ExpiredDate = this.ExpiredDate;
        if ( this.HasExpiredDate ) returnObj.HasExpiredDate = this.HasExpiredDate;
        if ( this.stock ) returnObj.stock = this.stock;
        if ( this.PurchasePrice ) returnObj.PurchasePrice = this.PurchasePrice;
        if ( this.SalePrice ) returnObj.SalePrice = this.SalePrice;
        if ( this.Description )  returnObj.Description = this.Description;     

        return returnObj;
    }

    static update(props:{[key:string]:any}):[JsonObject?,UpdateLotDto?]{
        const{Id,ProductId, LotCode, ProductCode,stock,PurchasePrice, SalePrice, ExpiredDate, HasExpiredDate, Description } = props;
        
        if ( !Id )   return [ErrorSpecific.ErrorEmpty('Debe seleccionar el lote a modificar'),undefined];
        if ( !ProductId ) return [ErrorSpecific.ErrorEmpty('Debe seleccionar el producto'),undefined]; 
        if ( !LotCode ) return [ErrorSpecific.ErrorEmpty('Debe ingresar el numero de lote del producto'),undefined]; 
        if ( !ProductCode ) return [ErrorSpecific.ErrorEmpty('Debe ingresar el codigo del producto'),undefined];
        if ( !HasExpiredDate &&  !ExpiredDate) return [ErrorSpecific.ErrorEmpty('Debe ingresar la fecha de vencimiento del producto'),undefined];   
        if ( !stock ) return [ErrorSpecific.ErrorEmpty('Debe ingresar el stock del producto'),undefined];
        if ( !PurchasePrice ) return [ErrorSpecific.ErrorEmpty('Debe ingresar el precio de compra del producto'),undefined];
        if ( !SalePrice ) return [ErrorSpecific.ErrorEmpty('Debe ingresar el precio de venta del producto'),undefined]; 

        return [undefined, new UpdateLotDto(Id,ProductId, LotCode, ProductCode,stock,PurchasePrice, SalePrice, ExpiredDate, HasExpiredDate, Description )]
    }
}