import { UpdatePresentationDto } from "../../dtos";
import { PresentationEntity } from "../../entities/presentation.entity";
import { PresentationRepository } from "../../repositories/presentation-repository";

export interface UpdatePresentationUseCase {
    execute(dto: UpdatePresentationDto):Promise<PresentationEntity>;
}

export class UpdatePresentation implements  UpdatePresentationUseCase{
    constructor(
        private readonly repostory: PresentationRepository
    ){}
    execute(dto: UpdatePresentationDto): Promise<PresentationEntity> {
        return this.repostory.updateById( dto );
    }   
    
}