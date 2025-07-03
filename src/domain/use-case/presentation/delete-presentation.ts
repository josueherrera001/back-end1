import { PresentationEntity } from "../../entities/presentation.entity";
import { PresentationRepository } from "../../repositories/presentation-repository";

export interface DeletePresentationUseCase {
    execute(id: string):Promise<PresentationEntity>;
}

export class DeletePresentation implements  DeletePresentationUseCase{
    constructor(
        private readonly repostory: PresentationRepository
    ){}
    execute(id: string): Promise<PresentationEntity> {
        return this.repostory.deleteById( id );
    }
    
}