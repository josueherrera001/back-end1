import { CreateSupplierDto, SupplierDatasource, SupplierEntity, SupplierRepository, UpdateSupplierDto } from "../../domain";

 export class SupplierRepositoryInfra implements SupplierRepository{
    
    constructor(
        private readonly datasource: SupplierDatasource
    ){}
     create(createTodoDto: CreateSupplierDto): Promise<SupplierEntity> {
        return this.datasource.create( createTodoDto );
     }
     getAll(): Promise<SupplierEntity[]> {
        return this.datasource.getAll( );
     }
     findById(id: string): Promise<SupplierEntity> {
        return this.datasource.findById( id );
     }
     updateById(updateTodoDto: UpdateSupplierDto): Promise<SupplierEntity> {
        return this.datasource.updateById( updateTodoDto );
     }
     deleteById(id: string): Promise<SupplierEntity> {
        return this.datasource.deleteById( id );
     }
 }