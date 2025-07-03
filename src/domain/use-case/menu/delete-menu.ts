import { MenuEntity } from "../../entities/menu.entity";
import { MenuRepository } from "../../repositories/menu-repository";

export interface DeleteMenuUseCase {
    execute(id: string):Promise<MenuEntity>;
}

export class DeleteMenu implements  DeleteMenuUseCase{
    constructor(
        private readonly repostory: MenuRepository
    ){}
    execute(id: string): Promise<MenuEntity> {
        return this.repostory.deleteById( id );
    }
    
}