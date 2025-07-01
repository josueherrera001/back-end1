export class AddressEntity{
    constructor(
        public readonly Id: string,
        public readonly UserId: string,
        public readonly LocationId: string,
        public readonly Street:string,
        public readonly StreetNumber:string,
        public readonly BetweenStreet: string
    ){}

    public static fromObject (object:{[key: string]:any}){
        const{Id,UserId, LocationId, Street, StreetNumber, BetweenStreet } = object;    

        return new AddressEntity(Id, UserId, LocationId, Street, StreetNumber, BetweenStreet );
    }
}