import { AccountMenuItemEntity, AccountMenuItemRepository } from "../..";

export interface DeleteAccountMenuItemUseCase {
    execute(id: string):Promise<AccountMenuItemEntity>;
}

export class DeleteAccountMenuItem implements  DeleteAccountMenuItemUseCase{
    constructor(
        private readonly repostory: AccountMenuItemRepository
    ){}
    execute(id: string): Promise<AccountMenuItemEntity> {
        return this.repostory.deleteById( id );
    }
    
}