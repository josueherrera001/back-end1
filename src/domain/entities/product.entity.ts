export class ProductEntity{
    constructor(
        public readonly Id: string,
        public readonly SubCategoryId: string,
        public readonly PresentationId: string,
        public readonly Name: string,
        public readonly ImageUrl: string,
        public readonly Description: string
    ){}

    public static fromObject (object:{[key: string]:any}){
        const{Id,SubCategoryId, PresentationId, Name, ImageUrl, Description } = object;    

        return new ProductEntity(Id,SubCategoryId, PresentationId, Name, ImageUrl, Description );
    }
}