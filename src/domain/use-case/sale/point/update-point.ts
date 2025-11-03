import { PointRepository } from "../../..";
import { UpdatePointDto } from "../../../dtos";
import { PointEntity } from "../../../entities/sales/point.entity";

export interface UpdatePointUserCase{
    execute(id: string, dto:UpdatePointDto):Promise<PointEntity>;
}
export class Update implements  UpdatePointUserCase{
    constructor(
        private readonly repostory: PointRepository
    ){}
    execute(id: string, dto: UpdatePointDto): Promise<PointEntity> {
        return this.repostory.update(id,dto);
    }
}