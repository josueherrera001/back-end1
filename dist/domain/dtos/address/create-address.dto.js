"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAddressDto = void 0;
class CreateAddressDto {
    constructor(UserId, LocationId, Street, StreetNumber, BetweenStreet) {
        this.UserId = UserId;
        this.LocationId = LocationId;
        this.Street = Street;
        this.StreetNumber = StreetNumber;
        this.BetweenStreet = BetweenStreet;
    }
    get Values() {
        const returnObj = {};
        if (this.UserId)
            returnObj.UserId = this.UserId;
        if (this.LocationId)
            returnObj.LocationId = this.LocationId;
        if (this.Street)
            returnObj.Street = this.Street;
        if (this.StreetNumber)
            returnObj.StreetNumber = this.StreetNumber;
        if (this.BetweenStreet)
            returnObj.Phone = this.BetweenStreet;
        return returnObj;
    }
    static create(props) {
        const { UserId, LocationId, Street, StreetNumber, BetweenStreet } = props;
        if (!LocationId)
            return ['Debe ingresar la localidad', undefined];
        if (!Street)
            return ['Debe ingresar el nombre de la calle', undefined];
        if (!StreetNumber)
            return ['Debe ingresar el numero de la casa', undefined];
        if (!BetweenStreet)
            return ['Debe ingresar la interseccion entre que calla a que calle', undefined];
        return [undefined, new CreateAddressDto(UserId, LocationId, Street, StreetNumber, BetweenStreet)];
    }
}
exports.CreateAddressDto = CreateAddressDto;
