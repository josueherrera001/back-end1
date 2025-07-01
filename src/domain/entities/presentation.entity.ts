export class PresentationEntity{
    constructor(
        public readonly Id: string,
        public readonly Name: string,
        public readonly Description: string
    ){}

    public static fromObject (object:{[key: string]:any}){
        const{Id,Name, Description } = object;    

        return new PresentationEntity(Id,Name, Description );
    }
}