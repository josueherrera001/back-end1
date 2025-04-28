import { CreateContactDto } from "../../dtos";
import { ContactEntity } from "../../entities/contact.entity";
import { ContactRepository } from "../../repositories/contact.repository";

export interface CreateContactUseCase {
    execute(dto: CreateContactDto):Promise<ContactEntity>;
}

export class CreateContact implements  CreateContactUseCase{
    constructor(
        private readonly repostory: ContactRepository
    ){}
    execute(dto: CreateContactDto): Promise<ContactEntity> {
        return this.repostory.create( dto );
    }
    
}