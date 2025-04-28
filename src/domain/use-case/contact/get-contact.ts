import { ContactEntity } from "../../entities/contact.entity";
import { ContactRepository } from "../../repositories/contact.repository";

export interface GetContactUseCase {
    execute(id: string):Promise<ContactEntity>;
}

export class GetContact implements  GetContactUseCase{
    constructor(
        private readonly repostory: ContactRepository
    ){}
    execute(id: string): Promise<ContactEntity> {
        return this.repostory.findById( id );
    }
    
}