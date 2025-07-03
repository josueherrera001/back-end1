import { RoleEntity } from "../../entities/role.entity";
import { RoleRepository } from "../../repositories/role-repository";

export interface GetRoleUseCase {
    execute(id: string):Promise<RoleEntity>;
}

export class GetRole implements  GetRoleUseCase{
    constructor(
        private readonly repostory: RoleRepository
    ){}
    execute(id: string): Promise<RoleEntity> {
        return this.repostory.findById( id );
    }
    
}