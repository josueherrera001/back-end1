import { CreateSaleDto } from "../../../dtos";

export interface CreateSaleUserCase{
    execute(dto:CreateSaleDto): Promise<void>;
}
export class Create implements CreateSaleUserCase{
    constructor(private readonly repository: any){} 
    execute(dto: CreateSaleDto): Promise<void> {
        return this.repository.create(dto);
    }   
}