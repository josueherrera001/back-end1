import { JsonObject } from "@prisma/client/runtime/library";
import { ErrorSpecific } from "../../../helpers";

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

    static update(props:{[key:string]:any}):[JsonObject?,UpdateAddressDto?]{
        const{Id,UserId, LocationId, Street, StreetNumber, BetweenStreet } = props;
        
        if ( !Id )   return [ErrorSpecific.ErrorEmpty('Debe seleccionar el usuario a modificar'),undefined]
        if ( !UserId ) return [ErrorSpecific.ErrorEmpty('Debe seleccionar el usuario'),undefined];
        if ( !LocationId ) return [ErrorSpecific.ErrorEmpty('Debe seleccionar la localidad'),undefined];
        if ( !Street ) return [ErrorSpecific.ErrorEmpty('Debe ingresar el nombre de la calle'),undefined];
        if ( !StreetNumber ) return [ErrorSpecific.ErrorEmpty('Debe ingresar el numero de la casa'), undefined];
        if ( !BetweenStreet ) return [ErrorSpecific.ErrorEmpty('Debe ingresar la interseccion entre que calla a que calle'), undefined];       

        return [undefined, new UpdateAddressDto(Id,UserId, LocationId, Street, StreetNumber, BetweenStreet )]
    }
}