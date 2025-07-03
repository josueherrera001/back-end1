import { CreateProductDto, ProductDatasource, ProductEntity, ProductRepository, UpdateProductDto } from "../../domain";

 export class ProductRepositoryInfra implements ProductRepository{
    
    constructor(
        private readonly datasource: ProductDatasource
    ){}
     create(createTodoDto: CreateProductDto): Promise<ProductEntity> {
        return this.datasource.create( createTodoDto );
     }
     getAll(): Promise<ProductEntity[]> {
        return this.datasource.getAll( );
     }
     findById(id: string): Promise<ProductEntity> {
        return this.datasource.findById( id );
     }
     updateById(updateTodoDto: UpdateProductDto): Promise<ProductEntity> {
        return this.datasource.updateById( updateTodoDto );
     }
     deleteById(id: string): Promise<ProductEntity> {
        return this.datasource.deleteById( id );
     }
 }