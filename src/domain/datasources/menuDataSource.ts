import { MenuEntity } from "..";
import { CreateMenuDto, UpdateMenuDto } from "../dtos";

export abstract class MenuDatasource{
    abstract create(Dto: CreateMenuDto): Promise<MenuEntity>;
    abstract getAll():Promise<MenuEntity[]>;
    abstract findById(id:string):Promise<MenuEntity>;
    abstract updateById(Dto:UpdateMenuDto):Promise<MenuEntity>;
    abstract deleteById(id:string):Promise<MenuEntity>;
}