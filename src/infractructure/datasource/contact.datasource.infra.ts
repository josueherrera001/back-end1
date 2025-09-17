import { prisma } from "../../data";
import { CreateContactDto, ContactDatasource, ContactEntity, UpdateContactDto } from "../../domain";
import { ErrorSpecific } from "../../helpers";

export class ContactDataSourceInfra implements ContactDatasource {
    async create(createContactDto: CreateContactDto): Promise<ContactEntity> {
        const contact = await prisma.contacts.create({
            data:{
                CreatedDate: new Date(),
                fullName: createContactDto.fullName,    
                email: createContactDto.email,
                phone: createContactDto.phone,
                description: createContactDto.description
            }
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

        if ( !contact ) throw ErrorSpecific.ErrorEmpty(`Id contacto:  ${ id } no encontrado`);
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