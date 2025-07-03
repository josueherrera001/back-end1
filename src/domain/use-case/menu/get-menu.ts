import { MenuEntity } from "../../entities/menu.entity";
import { MenuRepository } from "../../repositories/menu-repository";

export interface GetMenuUseCase {
    execute(id: string):Promise<MenuEntity>;
}

export class GetMenu implements  GetMenuUseCase{
    constructor(
        private readonly repostory: MenuRepository
    ){}
    execute(id: string): Promise<MenuEntity> {
        return this.repostory.findById( id );
    }
    
}