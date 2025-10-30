import { AccountMenuItemEntity, AccountMenuItemRepository } from "../..";
import { UpdateAccountMenuItemDto } from "../../dtos";

export interface UpdateAccountMenuItemUseCase {
    execute(dto: UpdateAccountMenuItemDto):Promise<AccountMenuItemEntity>;
}

export class UpdateAccountMenuItem implements  UpdateAccountMenuItemUseCase{
    constructor(
        private readonly repostory: AccountMenuItemRepository
    ){}
    execute(dto: UpdateAccountMenuItemDto): Promise<AccountMenuItemEntity> {
        return this.repostory.updateById( dto );
    }   
    
}