import { ProductEntity } from "../../entities/product.entity";
import { ProductRepository } from "../../repositories/product-repository";

export interface GetProductsUseCase {
    execute():Promise<ProductEntity[]>;
}

export class GetProducts implements  GetProductsUseCase{
    constructor(
        private readonly repostory: ProductRepository
    ){}
    execute(): Promise<ProductEntity[]> {
        return this.repostory.getAll();
    }
    
}