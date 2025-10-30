import { AccountEntity } from "../../entities/account.entity";
import { AuthRepository } from "../../repositories/auth-repository";

export interface AllAccountUserCase{
    execute():Promise<AccountEntity[]>;
}

export class AllAccount implements AllAccountUserCase{
    constructor(private readonly repository: AuthRepository ){}
    execute(): Promise<AccountEntity[]> {
        return this.repository.AllAccount();
    }

}