import { AccountMenuItemEntity, AccountMenuItemRepository } from "../..";
import { CreateAccountMenuItemDto } from "../../dtos";

export interface CreateAccountMenuItemUseCase {
    execute(dto: CreateAccountMenuItemDto):Promise<AccountMenuItemEntity>;
}

export class CreateAccountMenuItem implements  CreateAccountMenuItemUseCase{
    constructor(
        private readonly repostory: AccountMenuItemRepository
    ){}
    execute(dto: CreateAccountMenuItemDto): Promise<AccountMenuItemEntity> {
        return this.repostory.create( dto );
    }
    
}