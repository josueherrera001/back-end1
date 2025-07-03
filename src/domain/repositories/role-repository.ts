import { RoleEntity } from "..";
import { CreateRoleDto, UpdateRoleDto } from "../dtos";

export abstract class RoleRepository{
    abstract create(Dto: CreateRoleDto): Promise<RoleEntity>;
    abstract getAll():Promise<RoleEntity[]>;
    abstract findById(id:string):Promise<RoleEntity>;
    abstract updateById(Dto:UpdateRoleDto):Promise<RoleEntity>;
    abstract deleteById(id:string):Promise<RoleEntity>;
}