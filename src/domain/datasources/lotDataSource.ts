import { LotEntity } from "..";
import { CreateLotDto, UpdateLotDto } from "../dtos";

export abstract class LotDatasource{
    abstract create(Dto: CreateLotDto): Promise<LotEntity>;
    abstract getAll():Promise<LotEntity[]>;
    abstract findById(id:string):Promise<LotEntity>;
    abstract updateById(Dto:UpdateLotDto):Promise<LotEntity>;
    abstract deleteById(id:string):Promise<LotEntity>;
}