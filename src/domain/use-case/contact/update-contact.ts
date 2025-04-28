import { UpdateContactDto } from "../../dtos";
import { ContactEntity } from "../../entities/contact.entity";
import { ContactRepository } from "../../repositories/contact.repository";

export interface UpdateContactUseCase {
    execute(dto: UpdateContactDto):Promise<ContactEntity>;
}

export class UpdateContact implements  UpdateContactUseCase{
    constructor(
        private readonly repostory: ContactRepository
    ){}
    execute(dto: UpdateContactDto): Promise<ContactEntity> {
        return this.repostory.updateById( dto );
    }   
    
}