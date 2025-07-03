import { LotEntity } from "../../entities/lot.entity";
import { LotRepository } from "../../repositories/lot-repository";

export interface DeleteLotUseCase {
    execute(id: string):Promise<LotEntity>;
}

export class DeleteLot implements  DeleteLotUseCase{
    constructor(
        private readonly repostory: LotRepository
    ){}
    execute(id: string): Promise<LotEntity> {
        return this.repostory.deleteById( id );
    }
    
}