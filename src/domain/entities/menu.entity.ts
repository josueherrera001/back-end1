export class MenuEntity{
    constructor(
        public readonly Id: string,
        public readonly Name: string,
        public readonly Url: string,
        public readonly HasSubMenu: boolean,
        public readonly Description: string
    ){}

    public static fromObject (object:{[key: string]:any}){
        const{Id,Name, Url, HasSubMenu, Description } = object;    

        return new MenuEntity(Id,Name, Url, HasSubMenu, Description );
    }
}