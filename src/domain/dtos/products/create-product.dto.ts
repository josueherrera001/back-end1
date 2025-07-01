import { JsonObject } from "@prisma/client/runtime/library";
import { ErrorSpecific } from "../../../helpers";

export class CreateProductDto{
    constructor(
        public readonly SubCategoryId: string,
        public readonly PresentationId: string,
        public readonly Name: string,
        public readonly ImageUrl: string,
        public readonly Description: string
    ){}

    get Values(){
        const returnObj:{[key: string]:any} ={};

        if (this.SubCategoryId) returnObj.SubCategoryId = this.SubCategoryId;
        if ( this.PresentationId ) returnObj.PresentationId = this.PresentationId;
        if ( this.Name )  returnObj.Name = this.Name;
        if ( this.ImageUrl ) returnObj.ImageUrl = this.ImageUrl;
        if ( this.Description )  returnObj.Description = this.Description;           

        return returnObj;
    }

    static create(props:{[key:string]:any}):[JsonObject?,CreateProductDto?]{
        const{SubCategoryId, PresentationId, Name, ImageUrl, Description } = props;

        if ( !SubCategoryId ) return [ErrorSpecific.ErrorEmpty('Debe seleccionar la subcategoria del producto'),undefined]; 
        if ( !PresentationId ) return [ErrorSpecific.ErrorEmpty('Debe seleccionar la presentacion del producto'),undefined]; 
        if ( !Name ) return [ErrorSpecific.ErrorEmpty('Debe ingresar el nombre del producto'),undefined];    

        return [undefined, new CreateProductDto(SubCategoryId, PresentationId, Name, ImageUrl, Description )]
    }
}