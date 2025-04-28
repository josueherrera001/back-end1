import { ContactEntity } from "../../entities/contact.entity";
import { ContactRepository } from "../../repositories/contact.repository";

export interface DeleteContactUseCase {
    execute(id: string):Promise<ContactEntity>;
}

export class DeleteContact implements  DeleteContactUseCase{
    constructor(
        private readonly repostory: ContactRepository
    ){}
    execute(id: string): Promise<ContactEntity> {
        return this.repostory.deleteById( id );
    }
    
}