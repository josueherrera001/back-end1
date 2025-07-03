import { CreateSupplierDto } from "../../dtos";
import { SupplierEntity } from "../../entities/supplier.entity";
import { SupplierRepository } from "../../repositories/supplier-repository";

export interface CreateSupplierUseCase {
    execute(dto: CreateSupplierDto):Promise<SupplierEntity>;
}

export class CreateSupplier implements  CreateSupplierUseCase{
    constructor(
        private readonly repostory: SupplierRepository
    ){}
    execute(dto: CreateSupplierDto): Promise<SupplierEntity> {
        return this.repostory.create( dto );
    }
    
}