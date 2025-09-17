import { CreateSubMenuDto } from "../../dtos";
import { SubMenuEntity } from "../../entities/submenu.entity";
import { SubMenuRepository } from "../../repositories/submenu-repository";

export interface CreateSubMenuUseCase {
    execute(dto: CreateSubMenuDto):Promise<SubMenuEntity>;
}

export class CreateSubMenu implements  CreateSubMenuUseCase{
    constructor(
        private readonly repostory: SubMenuRepository
    ){}
    execute(dto: CreateSubMenuDto): Promise<SubMenuEntity> {
        return this.repostory.create( dto );
    }
    
}