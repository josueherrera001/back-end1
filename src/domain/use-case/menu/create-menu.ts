import { CreateMenuDto } from "../../dtos";
import { MenuEntity } from "../../entities/menu.entity";
import { MenuRepository } from "../../repositories/menu-repository";

export interface CreateMenuUseCase {
    execute(dto: CreateMenuDto):Promise<MenuEntity>;
}

export class CreateMenu implements  CreateMenuUseCase{
    constructor(
        private readonly repostory: MenuRepository
    ){}
    execute(dto: CreateMenuDto): Promise<MenuEntity> {
        return this.repostory.create( dto );
    }
    
}