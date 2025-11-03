import { SaleDetailEntity } from "../../../entities/sales/saledatail.entity";

export interface GetPointUserCase{
    execute(Id: string): Promise<SaleDetailEntity>;
}

export class Get implements GetPointUserCase{
    constructor(private readonly repository: any){} 
    execute(Id: string): Promise<SaleDetailEntity> {
        return this.repository.getById(Id);
    }   
}