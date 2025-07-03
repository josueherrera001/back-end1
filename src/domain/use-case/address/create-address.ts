import { CreateAddressDto } from "../../dtos";
import { AddressEntity } from "../../entities/address.entity";
import { AddressRepository } from "../../repositories/address-repository";

export interface CreateAddressUseCase {
    execute(dto: CreateAddressDto):Promise<AddressEntity>;
}

export class CreateAddress implements  CreateAddressUseCase{
    constructor(
        private readonly repostory: AddressRepository
    ){}
    execute(dto: CreateAddressDto): Promise<AddressEntity> {
        return this.repostory.create( dto );
    }
    
}