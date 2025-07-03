import { UpdateMenuDto } from "../../dtos";
import { MenuEntity } from "../../entities/menu.entity";
import { MenuRepository } from "../../repositories/menu-repository";

export interface UpdateMenuUseCase {
    execute(dto: UpdateMenuDto):Promise<MenuEntity>;
}

export class UpdateMenu implements  UpdateMenuUseCase{
    constructor(
        private readonly repostory: MenuRepository
    ){}
    execute(dto: UpdateMenuDto): Promise<MenuEntity> {
        return this.repostory.updateById( dto );
    }   
    
}