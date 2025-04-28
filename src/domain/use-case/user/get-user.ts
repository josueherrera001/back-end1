import { UserEntity } from "../../entities/user.entity";
import { UserRepository } from "../../repositories/user-repository";

export interface GetUserUseCase {
    execute(id: string):Promise<UserEntity>;
}

export class GetUser implements  GetUserUseCase{
    constructor(
        private readonly repostory: UserRepository
    ){}
    execute(id: string): Promise<UserEntity> {
        return this.repostory.findById( id );
    }
    
}