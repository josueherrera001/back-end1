import { LotEntity } from "..";
import { CreateLotDto, UpdateLotDto } from "../dtos";

export abstract class LotRepository{
    abstract create(Dto: CreateLotDto): Promise<LotEntity>;
    abstract getAll():Promise<LotEntity[]>;
    abstract findById(id:string):Promise<LotEntity>;
    abstract updateById(Dto:UpdateLotDto):Promise<LotEntity>;
    abstract deleteById(id:string):Promise<LotEntity>;
}