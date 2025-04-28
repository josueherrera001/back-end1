import { UpdateAuthDto } from "../../dtos";
import { AuthRepository } from "../../repositories/auth-repository";

export interface ChangePasswordUserCase{
    execute(dto: UpdateAuthDto):Promise<boolean>;
}

export class ChangePassword implements ChangePasswordUserCase{
    constructor(private readonly repository: AuthRepository ){}
    execute(dto: UpdateAuthDto): Promise<boolean> {
        return this.repository.ChangePass(dto);
    }
}