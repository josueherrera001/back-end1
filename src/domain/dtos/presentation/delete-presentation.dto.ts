import { JsonObject } from "@prisma/client/runtime/library";
import { ErrorSpecific } from "../../../helpers";

export class DeletePresentationDto{
    constructor(
        public readonly Id: string
    ){}

    get Values(){
        const returnObj:{[key: string]:any} ={};

        if ( this.Id )  returnObj.Id = this.Id;

        return returnObj;
    }

    static delete(props:{[key:string]:any}):[JsonObject?,DeletePresentationDto?]{
        const{ Id } = props;

        if ( !Id ) return [ErrorSpecific.ErrorEmpty('Debe seleccionar la presntacion que desee eliminar'),undefined];

        return [undefined, new DeletePresentationDto(Id)]
    }
}