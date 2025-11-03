import { PointRepository } from "../../..";
import { UpdatePointDto } from "../../../dtos";
import { PointEntity } from "../../../entities/sales/point.entity";

export interface DeletePointUserCase{
    execute(id: string):Promise<PointEntity>;
}
export class Delete implements  DeletePointUserCase{
    constructor(
        private readonly repostory: PointRepository
    ){}
    execute(id: string): Promise<PointEntity> {
        return this.repostory.delete(id);
    }
}
