import { JsonObject } from "swagger-ui-express";
import { ErrorSpecific } from "../../../../helpers";

export class DeleteSaleDto{
    constructor(
        public readonly Id: string
    ){}

    public get values(){
        const returnObj:{[key:string]:any} ={};
        if ( this.Id ) returnObj.Id = this.Id;
        return returnObj;
    }

    public static create(props:{[key:string]:any}):[JsonObject?, DeleteSaleDto?]{
        const { Id } = props;   
        if (!Id) return [ErrorSpecific.ErrorEmpty('Debe seleccionar la venta que desea eliminar'), undefined];
        return [undefined, new DeleteSaleDto(Id)];
    }
}