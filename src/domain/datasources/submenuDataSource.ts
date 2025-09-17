import { SubMenuEntity } from "..";
import { CreateSubMenuDto, UpdateSubMenuDto } from "../dtos";

export abstract class SubMenuDatasource{
    abstract create(Dto: CreateSubMenuDto): Promise<SubMenuEntity>;
    abstract getAll():Promise<SubMenuEntity[]>;
    abstract findById(id:string):Promise<SubMenuEntity>;
    abstract updateById(Dto:UpdateSubMenuDto):Promise<SubMenuEntity>;
    abstract deleteById(id:string):Promise<SubMenuEntity>;
}