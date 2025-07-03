import { RoleEntity } from "../../entities/role.entity";
import { RoleRepository } from "../../repositories/role-repository";

export interface GetRolesUseCase {
    execute():Promise<RoleEntity[]>;
}

export class GetRoles implements  GetRolesUseCase{
    constructor(
        private readonly repostory: RoleRepository
    ){}
    execute(): Promise<RoleEntity[]> {
        return this.repostory.getAll();
    }
    
}