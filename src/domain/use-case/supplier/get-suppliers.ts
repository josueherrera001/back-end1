import { SupplierEntity } from "../../entities/supplier.entity";
import { SupplierRepository } from "../../repositories/supplier-repository";

export interface GetSuppliersUseCase {
    execute():Promise<SupplierEntity[]>;
}

export class GetSuppliers implements  GetSuppliersUseCase{
    constructor(
        private readonly repostory: SupplierRepository
    ){}
    execute(): Promise<SupplierEntity[]> {
        return this.repostory.getAll();
    }
    
}