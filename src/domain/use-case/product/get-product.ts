import { ProductEntity } from "../../entities/product.entity";
import { ProductRepository } from "../../repositories/product-repository";

export interface GetProductUseCase {
    execute(id: string):Promise<ProductEntity>;
}

export class GetProduct implements  GetProductUseCase{
    constructor(
        private readonly repostory: ProductRepository
    ){}
    execute(id: string): Promise<ProductEntity> {
        return this.repostory.findById( id );
    }
    
}