import { CreateContactDto, ContactDatasource, ContactEntity, ContactRepository, UpdateContactDto } from "../../domain";

 export class ContactRepositoryInfra implements ContactRepository{
    
    constructor(
        private readonly datasource: ContactDatasource
    ){}
     create(createTodoDto: CreateContactDto): Promise<ContactEntity> {
        return this.datasource.create( createTodoDto );
     }
     getAll(): Promise<ContactEntity[]> {
        return this.datasource.getAll( );
     }
     findById(id: string): Promise<ContactEntity> {
        return this.datasource.findById( id );
     }
     updateById(updateTodoDto: UpdateContactDto): Promise<ContactEntity> {
        return this.datasource.updateById( updateTodoDto );
     }
     deleteById(id: string): Promise<ContactEntity> {
        return this.datasource.deleteById( id );
     }
 }