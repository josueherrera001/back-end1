import { AuthRepository } from "../../repositories/auth-repository";

export interface ValidateEmailUserCase{
    execute(token: string):Promise<boolean>;
}

export class ValidateEmail implements ValidateEmailUserCase{
    constructor(private readonly repository: AuthRepository ){}
    execute(token: string): Promise<boolean> {
        return this.repository.validateEmail(token);
    }

}