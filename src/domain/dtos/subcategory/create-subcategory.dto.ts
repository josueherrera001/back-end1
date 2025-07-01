import { JsonObject } from "@prisma/client/runtime/library";
import { ErrorSpecific } from "../../../helpers";

export class CreateSubCategoryDto{
    constructor(
        public readonly CategoryId: string,
        public readonly Name: string,
        public readonly Description: string
    ){}

    get Values(){
        const returnObj:{[key: string]:any} ={};

        if ( this.CategoryId )  returnObj.CategoryId = this.CategoryId;
        if ( this.Name )  returnObj.Name = this.Name;
        if ( this.Description )  returnObj.Description = this.Description;           

        return returnObj;
    }

    static create(props:{[key:string]:any}):[JsonObject?,CreateSubCategoryDto?]{
        const{CategoryId,Name, Description } = props;
        
        if ( !CategoryId ) return [ErrorSpecific.ErrorEmpty('Debe seleccionar la categoria'),undefined]; 
        if ( !Name ) return [ErrorSpecific.ErrorEmpty('Debe ingresar el nombre de la categoria'),undefined];    

        return [undefined, new CreateSubCategoryDto(CategoryId,Name, Description )]
    }
}