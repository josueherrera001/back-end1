import { CreatePresentationDto, PresentationDatasource, PresentationEntity, PresentationRepository, UpdatePresentationDto } from "../../domain";

 export class PresentationRepositoryInfra implements PresentationRepository{
    
    constructor(
        private readonly datasource: PresentationDatasource
    ){}
     create(createTodoDto: CreatePresentationDto): Promise<PresentationEntity> {
        return this.datasource.create( createTodoDto );
     }
     getAll(): Promise<PresentationEntity[]> {
        return this.datasource.getAll( );
     }
     findById(id: string): Promise<PresentationEntity> {
        return this.datasource.findById( id );
     }
     updateById(updateTodoDto: UpdatePresentationDto): Promise<PresentationEntity> {
        return this.datasource.updateById( updateTodoDto );
     }
     deleteById(id: string): Promise<PresentationEntity> {
        return this.datasource.deleteById( id );
     }
 }