import { PointEntity, PointRepository } from "../../..";

export interface GetPointUserCase{
    execute(id: string):Promise<PointEntity>;
}
export class Get implements  GetPointUserCase{
    constructor(
        private readonly repostory: PointRepository
    ){}
    execute(id: string): Promise<PointEntity> {
        return this.repostory.getbyId(id);
    }
}