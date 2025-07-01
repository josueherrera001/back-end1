import { AddressEntity } from "..";
import { CreateAddressDto,  UpdateAddressDto } from "../dtos";

export abstract class AddressRepository{
    abstract create(Dto: CreateAddressDto): Promise<AddressEntity>;
    abstract getAll():Promise<AddressEntity[]>;
    abstract findById(id:string):Promise<AddressEntity>;
    abstract updateById(Dto:UpdateAddressDto):Promise<AddressEntity>;
    abstract deleteById(id:string):Promise<AddressEntity>;
}