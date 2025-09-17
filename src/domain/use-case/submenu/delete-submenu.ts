import { SubMenuEntity } from "../../entities/submenu.entity";
import { SubMenuRepository } from "../../repositories/submenu-repository";

export interface DeleteSubMenuUseCase {
    execute(id: string):Promise<SubMenuEntity>;
}

export class DeleteSubMenu implements  DeleteSubMenuUseCase{
    constructor(
        private readonly repostory: SubMenuRepository
    ){}
    execute(id: string): Promise<SubMenuEntity> {
        return this.repostory.deleteById( id );
    }
    
}