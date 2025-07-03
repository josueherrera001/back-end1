import { AddressEntity } from "../../entities/address.entity";
import { AddressRepository } from "../../repositories/address-repository";

export interface GetAddressesUseCase {
    execute():Promise<AddressEntity[]>;
}

export class GetAddresses implements  GetAddressesUseCase{
    constructor(
        private readonly repostory: AddressRepository
    ){}
    execute(): Promise<AddressEntity[]> {
        return this.repostory.getAll();
    }
    
}