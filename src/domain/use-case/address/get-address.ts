import { AddressEntity } from "../../entities/address.entity";
import { AddressRepository } from "../../repositories/addressRepository";

export interface GetAddressUseCase {
    execute(id: string):Promise<AddressEntity>;
}

export class GetAddress implements  GetAddressUseCase{
    constructor(
        private readonly repostory: AddressRepository
    ){}
    execute(id: string): Promise<AddressEntity> {
        return this.repostory.findById( id );
    }
    
}