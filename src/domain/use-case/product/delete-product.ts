import { ProductEntity } from "../../entities/product.entity";
import { ProductRepository } from "../../repositories/product-repository";

export interface DeleteProductUseCase {
    execute(id: string):Promise<ProductEntity>;
}

export class DeleteProduct implements  DeleteProductUseCase{
    constructor(
        private readonly repostory: ProductRepository
    ){}
    execute(id: string): Promise<ProductEntity> {
        return this.repostory.deleteById( id );
    }
    
}