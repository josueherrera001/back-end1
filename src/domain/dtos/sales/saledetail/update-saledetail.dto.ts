import { Decimal, JsonObject } from "@prisma/client/runtime/library";
import { ErrorSpecific } from "../../../../helpers";

export class UpdateSaleDetailDto {
    constructor(
        public readonly Id: string,
        public readonly SaleId: string,   
        public readonly ProductId: string ,
        public readonly Quantity: number  ,
        public readonly Price: Decimal     ,
        public readonly SubCategoryId?: string,     
      ) {}

      get values() {

         const returnObj:{[key:string]:any} ={};    

            if ( this.Id ) returnObj.Id = this.Id;
            if ( this.SaleId ) returnObj.SaleId = this.SaleId;
            if ( this.ProductId ) returnObj.ProductId = this.ProductId;
            if ( this.Quantity ) returnObj.Quantity = this.Quantity;
            if ( this.Price ) returnObj.Price = this.Price;
            if ( this.SubCategoryId ) returnObj.SubCategoryId = this.SubCategoryId; 

            return returnObj;
        }

    public static create(props:{[key:string]:any}):[JsonObject?, UpdateSaleDetailDto?] {
        const { Id, SaleId, ProductId, Quantity, Price, SubCategoryId } = props;

        if (!ProductId) [ErrorSpecific.ErrorEmpty('Debe seleccionar el producto'), undefined];
        if (!Quantity) [ErrorSpecific.ErrorEmpty('Debe ingresar la cantidad'), undefined];
        if (!Price) [ErrorSpecific.ErrorEmpty('Debe ingresar el total'),undefined];  

        return [undefined, new UpdateSaleDetailDto(Id, SaleId, ProductId, Quantity, Price, SubCategoryId)];
    }
}