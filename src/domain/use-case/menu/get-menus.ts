import { MenuEntity } from "../../entities/menu.entity";
import { MenuRepository } from "../../repositories/menu-repository";

export interface GetMenusUseCase {
    execute():Promise<MenuEntity[]>;
}

export class GetMenus implements  GetMenusUseCase{
    constructor(
        private readonly repostory: MenuRepository
    ){}
    execute(): Promise<MenuEntity[]> {
        return this.repostory.getAll();
    }
    
}