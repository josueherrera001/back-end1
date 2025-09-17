import { SubMenuEntity } from "../../entities/submenu.entity";
import { SubMenuRepository } from "../../repositories/submenu-repository";

export interface GetSubMenusUseCase {
    execute():Promise<SubMenuEntity[]>;
}

export class GetSubMenus implements  GetSubMenusUseCase{
    constructor(
        private readonly repostory: SubMenuRepository
    ){}
    execute(): Promise<SubMenuEntity[]> {
        return this.repostory.getAll();
    }
    
}