import { LotEntity } from "../../entities/lot.entity";
import { LotRepository } from "../../repositories/lot-repository";

export interface GetLotUseCase {
    execute(id: string):Promise<LotEntity>;
}

export class GetLot implements  GetLotUseCase{
    constructor(
        private readonly repostory: LotRepository
    ){}
    execute(id: string): Promise<LotEntity> {
        return this.repostory.findById( id );
    }
    
}