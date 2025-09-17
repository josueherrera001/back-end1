import { prisma } from "../../data";
import { CreateAddressDto, AddressDatasource, AddressEntity, UpdateAddressDto } from "../../domain";
import { ErrorSpecific } from "../../helpers";

export class AddressDataSourceInfra implements AddressDatasource {
    async create(createDto: CreateAddressDto): Promise<AddressEntity> {
        const addresses = await prisma.addresses.create({
            data:{
                UserId: createDto.UserId,
                Between: createDto.BetweenStreet,
                Number: createDto.StreetNumber,
                Country: createDto.Country,
                Province: createDto.Province,
                Location: createDto.Location,
                Street: createDto.Street,
                CreatedDate: new Date(),
            }
        });
        return AddressEntity.fromObject( addresses );
    }

    async getAll(): Promise<AddressEntity[]> {
        const entities = await prisma.categories.findMany();

        return entities.map(entity => AddressEntity.fromObject(entity));
    }

    async findById(id: string): Promise<AddressEntity> {
        const entity = await prisma.addresses.findFirst({
            where:{
                Id:id
            }
        });

        if ( !entity ) throw ErrorSpecific.ErrorEmpty(`Id de la direccion:  ${ id } no encontrado`);
        return AddressEntity.fromObject(entity);
    }
    
    async updateById(updateContactDto: UpdateAddressDto): Promise<AddressEntity> {
        
        await this.findById( updateContactDto.Id );       

        const updatedContact = await prisma.addresses.update({
            where:{
                Id:updateContactDto.Id
            },
            data:{
                UserId: updateContactDto.UserId,
                Between: updateContactDto.BetweenStreet,
                Number: updateContactDto.StreetNumber,
                Country: updateContactDto.Country,
                Province: updateContactDto.Province,
                Location: updateContactDto.Location,
                Street: updateContactDto.Street
            }
        });

        return AddressEntity.fromObject( updatedContact );
    }

    async deleteById(id: string): Promise<AddressEntity> {
        await this.findById( id );  

        const deletecontact = await prisma.addresses.delete({
            where:{
                Id:id
            }
        });

        return AddressEntity.fromObject( deletecontact );
    }
    
}