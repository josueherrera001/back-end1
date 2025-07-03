import {PresentationEntity } from "..";
import { CreatePresentationDto, UpdatePresentationDto } from "../dtos";

export abstract class PresentationRepository{
    abstract create(Dto: CreatePresentationDto): Promise<PresentationEntity>;
    abstract getAll():Promise<PresentationEntity[]>;
    abstract findById(id:string):Promise<PresentationEntity>;
    abstract updateById(Dto:UpdatePresentationDto):Promise<PresentationEntity>;
    abstract deleteById(id:string):Promise<PresentationEntity>;
}