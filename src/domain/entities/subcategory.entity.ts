export class SubCategoryEntity{
    constructor(
        public readonly Id: string,
        public readonly CategoryId: string,
        public readonly Name: string,
        public readonly Description: string
    ){}

    public static fromObject (object:{[key: string]:any}){
        const{Id,CategoryId,Name, Description } = object;    

        return new SubCategoryEntity(Id, CategoryId, Name, Description );
    }
}