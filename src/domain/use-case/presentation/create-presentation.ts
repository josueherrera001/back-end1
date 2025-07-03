import { CreatePresentationDto } from "../../dtos";
import { PresentationEntity } from "../../entities/presentation.entity";
import { PresentationRepository } from "../../repositories/presentation-repository";

export interface CreatePresentationUseCase {
    execute(dto: CreatePresentationDto):Promise<PresentationEntity>;
}

export class CreatePresentation implements  CreatePresentationUseCase{
    constructor(
        private readonly repostory: PresentationRepository
    ){}
    execute(dto: CreatePresentationDto): Promise<PresentationEntity> {
        return this.repostory.create( dto );
    }
    
}