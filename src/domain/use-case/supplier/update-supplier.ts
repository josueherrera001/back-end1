import { UpdateSupplierDto } from "../../dtos";
import { SupplierEntity } from "../../entities/supplier.entity";
import { SupplierRepository } from "../../repositories/supplier-repository";

export interface UpdateSupplierUseCase {
    execute(dto: UpdateSupplierDto):Promise<SupplierEntity>;
}

export class UpdateSupplier implements  UpdateSupplierUseCase{
    constructor(
        private readonly repostory: SupplierRepository
    ){}
    execute(dto: UpdateSupplierDto): Promise<SupplierEntity> {
        return this.repostory.updateById( dto );
    }   
    
}