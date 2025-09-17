import { UpdateSubMenuDto } from "../../dtos";
import { SubMenuEntity } from "../../entities/submenu.entity";
import { SubMenuRepository } from "../../repositories/submenu-repository";

export interface UpdateSubMenuUseCase {
    execute(dto: UpdateSubMenuDto):Promise<SubMenuEntity>;
}

export class UpdateSubMenu implements  UpdateSubMenuUseCase{
    constructor(
        private readonly repostory: SubMenuRepository
    ){}
    execute(dto: UpdateSubMenuDto): Promise<SubMenuEntity> {
        return this.repostory.updateById( dto );
    }   
    
}