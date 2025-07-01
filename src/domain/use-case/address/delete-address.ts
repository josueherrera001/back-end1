import { AddressEntity } from "../../entities/address.entity";
import { AddressRepository } from "../../repositories/addressRepository";

export interface DeleteAddressUseCase {
    execute(id: string):Promise<AddressEntity>;
}

export class DeleteAddress implements  DeleteAddressUseCase{
    constructor(
        private readonly repostory: AddressRepository
    ){}
    execute(id: string): Promise<AddressEntity> {
        return this.repostory.deleteById( id );
    }
    
}