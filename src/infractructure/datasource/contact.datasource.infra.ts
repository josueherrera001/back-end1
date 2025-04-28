import { prisma } from "../../data";
import { CreateContactDto, ContactDatasource, ContactEntity, UpdateContactDto } from "../../domain";

export class ContactDataSourceInfra implements ContactDatasource {
    async create(createContactDto: CreateContactDto): Promise<ContactEntity> {
        const contact = await prisma.contacts.create({
            data:createContactDto!
        });
        return ContactEntity.fromObject( contact );
    }

    async getAll(): Promise<ContactEntity[]> {
        const contacts = await prisma.contacts.findMany();

        return contacts.map(contact => ContactEntity.fromObject(contact));
    }

    async findById(id: string): Promise<ContactEntity> {
        const contact = await prisma.contacts.findFirst({
            where:{
                id:id
            }
        });

        if ( !contact ) throw `Id contacto:  ${ id } no encontrado`;
        return ContactEntity.fromObject(contact);
    }
    
    async updateById(updateContactDto: UpdateContactDto): Promise<ContactEntity> {
        
        await this.findById( updateContactDto.id );       

        const updatedContact = await prisma.contacts.update({
            where:{
                id:updateContactDto.id
            },
            data:updateContactDto!.values
        });

        return ContactEntity.fromObject( updatedContact );
    }

    async deleteById(id: string): Promise<ContactEntity> {
        await this.findById( id );  

        const deletecontact = await prisma.contacts.delete({
            where:{
                id:id
            }
        });

        return ContactEntity.fromObject( deletecontact );
    }
    
}