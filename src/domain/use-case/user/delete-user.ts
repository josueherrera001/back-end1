import { UserEntity } from "../../entities/user.entity";
import { UserRepository } from "../../repositories/user-repository";

export interface DeleteUserUseCase {
    execute(id: string):Promise<UserEntity>;
}

export class DeleteUser implements  DeleteUserUseCase{
    constructor(
        private readonly repostory: UserRepository
    ){}
    execute(id: string): Promise<UserEntity> {
        return this.repostory.deleteById( id );
    }
    
}