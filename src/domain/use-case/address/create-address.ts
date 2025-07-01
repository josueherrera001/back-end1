import { CreateAddressDto } from "../../dtos";
import { AddressEntity } from "../../entities/address.entity";
import { AddressRepository } from "../../repositories/addressRepository";

export interface CreateAddresstUseCase {
    execute(dto: CreateAddressDto):Promise<AddressEntity>;
}

export class CreateAddress implements  CreateAddresstUseCase{
    constructor(
        private readonly repostory: AddressRepository
    ){}
    execute(dto: CreateAddressDto): Promise<AddressEntity> {
        return this.repostory.create( dto );
    }
    
}