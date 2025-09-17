"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAddressDto = void 0;
const helpers_1 = require("../../../helpers");
class CreateAddressDto {
    constructor(UserId, Country, Province, Location, Street, StreetNumber, BetweenStreet) {
        this.UserId = UserId;
        this.Country = Country;
        this.Province = Province;
        this.Location = Location;
        this.Street = Street;
        this.StreetNumber = StreetNumber;
        this.BetweenStreet = BetweenStreet;
    }
    get Values() {
        const returnObj = {};
        if (this.UserId)
            returnObj.UserId = this.UserId;
        if (this.Country)
            returnObj.Country = this.Country;
        if (this.Province)
            returnObj.Province = this.Province;
        if (this.Location)
            returnObj.Location = this.Location;
        if (this.Street)
            returnObj.Street = this.Street;
        if (this.StreetNumber)
            returnObj.StreetNumber = this.StreetNumber;
        if (this.BetweenStreet)
            returnObj.Phone = this.BetweenStreet;
        return returnObj;
    }
    static create(props) {
        const { UserId, Country, Province, Location, Street, StreetNumber, BetweenStreet } = props;
        if (!Country)
            return [helpers_1.ErrorSpecific.ErrorEmpty('Debe ingresar el pais'), undefined];
        if (!Province)
            return [helpers_1.ErrorSpecific.ErrorEmpty('Debe ingresar la provincia'), undefined];
        if (!Location)
            return [helpers_1.ErrorSpecific.ErrorEmpty('Debe ingresar la localidad'), undefined];
        if (!Street)
            return [helpers_1.ErrorSpecific.ErrorEmpty('Debe ingresar el nombre de la calle'), undefined];
        if (!StreetNumber)
            return [helpers_1.ErrorSpecific.ErrorEmpty('Debe ingresar el numero de la casa'), undefined];
        if (!BetweenStreet)
            return [helpers_1.ErrorSpecific.ErrorEmpty('Debe ingresar la interseccion entre que calla a que calle'), undefined];
        return [undefined, new CreateAddressDto(UserId, Country, Province, Location, Street, StreetNumber, BetweenStreet)];
    }
}
exports.CreateAddressDto = CreateAddressDto;
