import { SubMenuEntity } from "../../entities/submenu.entity";
import { SubMenuRepository } from "../../repositories/submenu-repository";

export interface GetSubMenuUseCase {
    execute(id: string):Promise<SubMenuEntity>;
}

export class GetSubMenu implements  GetSubMenuUseCase{
    constructor(
        private readonly repostory: SubMenuRepository
    ){}
    execute(id: string): Promise<SubMenuEntity> {
        return this.repostory.findById( id );
    }
    
}