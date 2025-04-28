import { ContactEntity } from "../../entities/contact.entity";
import { ContactRepository } from "../../repositories/contact.repository";

export interface GetContactsUseCase {
    execute():Promise<ContactEntity[]>;
}

export class GetContacts implements  GetContactsUseCase{
    constructor(
        private readonly repostory: ContactRepository
    ){}
    execute(): Promise<ContactEntity[]> {
        return this.repostory.getAll();
    }
    
}