import { JsonObject } from "@prisma/client/runtime/library";
import { ErrorSpecific } from "../../../../helpers";

export class DeleteDetailDto {
    constructor(
        public readonly Id: string
    ) {}        
    get values() {
        const returnObj:{[key:string]:any} ={};
        if ( this.Id ) returnObj.Id = this.Id;
        return returnObj;
    }
    public static create(props:{[key:string]:any}):[JsonObject?, DeleteDetailDto?] {
        const { Id } = props;
        if (!Id) return [ErrorSpecific.ErrorEmpty('Debe seleccionar el detalle de venta que desea eliminar'), undefined];
        return [undefined, new DeleteDetailDto(Id)];
    }   
}