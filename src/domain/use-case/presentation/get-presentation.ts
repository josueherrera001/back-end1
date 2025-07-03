import { PresentationEntity } from "../../entities/presentation.entity";
import { PresentationRepository } from "../../repositories/presentation-repository";

export interface GetPresentationUseCase {
    execute(id: string):Promise<PresentationEntity>;
}

export class GetPresentation implements  GetPresentationUseCase{
    constructor(
        private readonly repostory: PresentationRepository
    ){}
    execute(id: string): Promise<PresentationEntity> {
        return this.repostory.findById( id );
    }
    
}