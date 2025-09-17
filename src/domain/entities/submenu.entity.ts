export class SubMenuEntity{
    constructor(
        public readonly Id: string,
        public readonly MenuId: string,
        public readonly Name: string,
        public readonly Url: string,
        public readonly Description: string
    ){}

    public static fromObject (object:{[key: string]:any}){
        const{Id, MenuId, Name, Url, Description } = object;    
        return new SubMenuEntity(Id, MenuId,Name, Url, Description );
    }
}