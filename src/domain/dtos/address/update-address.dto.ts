
export class UpdateAddressDto{
    constructor(
        public readonly Id: string,
        public readonly UserId: string,
        public readonly LocationId: string,
        public readonly Street:string,
        public readonly StreetNumber:string,
        public readonly BetweenStreet: string
    ){}

    get Values(){
        const returnObj:{[key: string]:any} ={};

        if ( this.Id )  returnObj.Id = this.Id;
        if ( this.UserId )  returnObj.UserId = this.UserId;
        if ( this.LocationId )  returnObj.LocationId = this.LocationId;
        if ( this.Street )   returnObj.Street = this.Street;
        if ( this.StreetNumber )  returnObj.StreetNumber = this.StreetNumber;
        if ( this.BetweenStreet )  returnObj.Phone = this.BetweenStreet;       

        return returnObj;
    }

    static update(props:{[key:string]:any}):[string?,UpdateAddressDto?]{
        const{Id,UserId, LocationId, Street, StreetNumber, BetweenStreet } = props;
        
        if ( !Id )   return ['Debe seleccionar el usuario a modificar',undefined]
        if ( !UserId ) return ['Debe seleccionar el usuario',undefined];
        if ( !LocationId ) return ['Debe seleccionar la localidad',undefined];
        if ( !Street ) return ['Debe ingresar el nombre de la calle',undefined];
        if ( !StreetNumber ) return ['Debe ingresar el numero de la casa', undefined];
        if ( !BetweenStreet ) return ['Debe ingresar la interseccion entre que calla a que calle', undefined];       

        return [undefined, new UpdateAddressDto(Id,UserId, LocationId, Street, StreetNumber, BetweenStreet )]
    }
}