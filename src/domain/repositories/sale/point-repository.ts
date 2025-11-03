import { CreatePointDto, UpdatePointDto } from "../../dtos";
import { PointEntity } from "../../entities/sales/point.entity";

export abstract class PointRepository {
    abstract create(dto: CreatePointDto): Promise<PointEntity>;
    abstract getbyId(id: string): Promise<PointEntity>;
    abstract update(id: string, dto: UpdatePointDto): Promise<PointEntity>;
    abstract delete(id: string): Promise<PointEntity>;
    abstract getAll(AccountId:string): Promise<PointEntity[]>;
}