import { PointEntity, PointRepository } from "../../..";

export interface GetPointsUserCase{
    execute(AccountId:string):Promise<PointEntity[]>;
}

export class GetAll implements  GetPointsUserCase{
    constructor(
        private readonly repostory: PointRepository
    ){}
    execute(AccountId: string): Promise<PointEntity[]> {
        return this.repostory.getAll(AccountId);
    }   
}