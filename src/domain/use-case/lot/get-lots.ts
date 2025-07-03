import { LotEntity } from "../../entities/lot.entity";
import { LotRepository } from "../../repositories/lot-repository";

export interface GetLotsUseCase {
    execute():Promise<LotEntity[]>;
}

export class GetLots implements  GetLotsUseCase{
    constructor(
        private readonly repostory: LotRepository
    ){}
    execute(): Promise<LotEntity[]> {
        return this.repostory.getAll();
    }
    
}