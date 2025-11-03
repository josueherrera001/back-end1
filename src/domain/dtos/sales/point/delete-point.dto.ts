import { JsonObject } from "@prisma/client/runtime/library";
import { ErrorSpecific } from "../../../../helpers";

export class DeletePointDto{
    constructor(
        public readonly Id: string
    ){}

    public get values(){
        const returnObj:{[key:string]:any} ={};

        if ( this.Id ) returnObj.Id = this.Id;

        return returnObj;
    }
    public static create(props:{[key:string]:any}):[JsonObject?, DeletePointDto?]{
        const { Id } = props;

        if (!Id) return [ ErrorSpecific.ErrorEmpty('Debe seleccionar el punto que desea eliminar'), undefined];

        return [undefined, new DeletePointDto(Id)];
    }
}