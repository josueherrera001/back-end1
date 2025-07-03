import { CreateAddressDto, AddressDatasource, AddressEntity, AddressRepository, UpdateAddressDto } from "../../domain";

 export class AddressRepositoryInfra implements AddressRepository{
    
    constructor(
        private readonly datasource: AddressDatasource
    ){}
     create(createTodoDto: CreateAddressDto): Promise<AddressEntity> {
        return this.datasource.create( createTodoDto );
     }
     getAll(): Promise<AddressEntity[]> {
        return this.datasource.getAll( );
     }
     findById(id: string): Promise<AddressEntity> {
        return this.datasource.findById( id );
     }
     updateById(updateTodoDto: UpdateAddressDto): Promise<AddressEntity> {
        return this.datasource.updateById( updateTodoDto );
     }
     deleteById(id: string): Promise<AddressEntity> {
        return this.datasource.deleteById( id );
     }
 }