import { CreateLotDto, LotDatasource, LotEntity, LotRepository, UpdateLotDto } from "../../domain";

 export class LotRepositoryInfra implements LotRepository{
    
    constructor(
        private readonly datasource: LotDatasource
    ){}
     create(createTodoDto: CreateLotDto): Promise<LotEntity> {
        return this.datasource.create( createTodoDto );
     }
     getAll(): Promise<LotEntity[]> {
        return this.datasource.getAll( );
     }
     findById(id: string): Promise<LotEntity> {
        return this.datasource.findById( id );
     }
     updateById(updateTodoDto: UpdateLotDto): Promise<LotEntity> {
        return this.datasource.updateById( updateTodoDto );
     }
     deleteById(id: string): Promise<LotEntity> {
        return this.datasource.deleteById( id );
     }
 }