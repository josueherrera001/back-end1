import { CreateContactDto, UpdateContactDto } from "../dtos";
import { ContactEntity } from "../entities/contact.entity";

export abstract class ContactRepository{
    abstract create(createTodoDto: CreateContactDto): Promise<ContactEntity>;
    abstract getAll():Promise<ContactEntity[]>;
    abstract findById(id:string):Promise<ContactEntity>;
    abstract updateById(updateTodoDto:UpdateContactDto):Promise<ContactEntity>;
    abstract deleteById(id:string):Promise<ContactEntity>;
}