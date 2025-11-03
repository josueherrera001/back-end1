import { CreatePointDto, PointEntity, PointRepository } from "../../..";

export interface CreateUserCase{
    execute(dto: CreatePointDto):Promise<PointEntity>;
}

export class Create implements  CreateUserCase{
    constructor(
        private readonly repostory: PointRepository
    ){}
    execute(dto: CreatePointDto): Promise<PointEntity> {
        return this.repostory.create(dto);
    }
}