import { UpdateProductDto } from "../../dtos";
import { ProductEntity } from "../../entities/product.entity";
import { ProductRepository } from "../../repositories/product-repository";

export interface UpdateProductUseCase {
    execute(dto: UpdateProductDto):Promise<ProductEntity>;
}

export class UpdateProduct implements  UpdateProductUseCase{
    constructor(
        private readonly repostory: ProductRepository
    ){}
    execute(dto: UpdateProductDto): Promise<ProductEntity> {
        return this.repostory.updateById( dto );
    }   
    
}