import { JsonObject } from "@prisma/client/runtime/library";
import { ErrorSpecific } from "../../../helpers";

export class DeleteUserDto{
    constructor(
        public readonly Id: string
    ){}

    get Values(){
        const returnObj:{[key: string]:any} ={};

        if ( this.Id )  returnObj.Id = this.Id;

        return returnObj;
    }

    static create(props:{[key:string]:any}):[JsonObject?,DeleteUserDto?]{
        const{ Id } = props;

        if ( !Id ) return [ErrorSpecific.ErrorEmpty('Debe seleccionar la persona que desee eliminar'),undefined];

        return [undefined, new DeleteUserDto(Id)]
    }
}