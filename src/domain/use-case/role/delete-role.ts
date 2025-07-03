import { RoleEntity } from "../../entities/role.entity";
import { RoleRepository } from "../../repositories/role-repository";

export interface DeleteRoleUseCase {
    execute(id: string):Promise<RoleEntity>;
}

export class DeleteRole implements  DeleteRoleUseCase{
    constructor(
        private readonly repostory: RoleRepository
    ){}
    execute(id: string): Promise<RoleEntity> {
        return this.repostory.deleteById( id );
    }
    
}