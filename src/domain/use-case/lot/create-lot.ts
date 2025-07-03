import { CreateLotDto } from "../../dtos";
import { LotEntity } from "../../entities/lot.entity";
import { LotRepository } from "../../repositories/lot-repository";

export interface CreateLotUseCase {
    execute(dto: CreateLotDto):Promise<LotEntity>;
}

export class CreateLot implements  CreateLotUseCase{
    constructor(
        private readonly repostory: LotRepository
    ){}
    execute(dto: CreateLotDto): Promise<LotEntity> {
        return this.repostory.create( dto );
    }
    
}