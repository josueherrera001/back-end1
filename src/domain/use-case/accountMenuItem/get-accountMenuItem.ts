import { AccountMenuItemEntity, AccountMenuItemRepository } from "../..";

export interface GetAccountMenuItemUseCase {
    execute(id: string):Promise<AccountMenuItemEntity>;
}

export class GetAccountMenuItem implements  GetAccountMenuItemUseCase{
    constructor(
        private readonly repostory: AccountMenuItemRepository
    ){}
    execute(id: string): Promise<AccountMenuItemEntity> {
        return this.repostory.findById( id );
    }
    
}