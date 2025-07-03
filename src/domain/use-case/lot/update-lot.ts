import { UpdateLotDto } from "../../dtos";
import { LotEntity } from "../../entities/lot.entity";
import { LotRepository } from "../../repositories/lot-repository";

export interface UpdateLotUseCase {
    execute(dto: UpdateLotDto):Promise<LotEntity>;
}

export class UpdateLot implements  UpdateLotUseCase{
    constructor(
        private readonly repostory: LotRepository
    ){}
    execute(dto: UpdateLotDto): Promise<LotEntity> {
        return this.repostory.updateById( dto );
    }   
    
}