import { UpdateAddressDto } from "../../dtos";
import { AddressEntity } from "../../entities/address.entity";
import { AddressRepository } from "../../repositories/addressRepository";

export interface UpdateAddressUseCase {
    execute(dto: UpdateAddressDto):Promise<AddressEntity>;
}

export class UpdateContact implements  UpdateAddressUseCase{
    constructor(
        private readonly repostory: AddressRepository
    ){}
    execute(dto: UpdateAddressDto): Promise<AddressEntity> {
        return this.repostory.updateById( dto );
    }   
    
}