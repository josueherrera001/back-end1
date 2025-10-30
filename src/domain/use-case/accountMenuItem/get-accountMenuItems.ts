import { AccountMenuItemEntity, AccountMenuItemRepository } from "../..";

export interface GetAccountMenuItemsUseCase {
    execute(Id: string):Promise<AccountMenuItemEntity[]>;
}

export class GetAccountMenuItems implements  GetAccountMenuItemsUseCase{
    constructor(
        private readonly repostory: AccountMenuItemRepository
    ){}
    execute(Id:string): Promise<AccountMenuItemEntity[]> {
        return this.repostory.getAll( Id );
    }
    
}