import { PresentationEntity } from "../../entities/presentation.entity";
import { PresentationRepository } from "../../repositories/presentation-repository";

export interface GetPresentationsUseCase {
    execute():Promise<PresentationEntity[]>;
}

export class GetPresentations implements  GetPresentationsUseCase{
    constructor(
        private readonly repostory: PresentationRepository
    ){}
    execute(): Promise<PresentationEntity[]> {
        return this.repostory.getAll();
    }
    
}