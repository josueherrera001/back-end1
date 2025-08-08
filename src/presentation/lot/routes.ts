import { Router } from "express";
import { LotController } from "./lotController";
import { AuthToken } from "../../Middlewares/authtoken";
import { LotDataSourceInfra } from "../../infractructure/datasource/lot.datasource.infra";
import { LotRepositoryInfra } from "../../infractructure/repositories/lot.repository.infra";

export class LotRoutes{

    static get route(): Router{
        const router = Router();

        const datasource = new LotDataSourceInfra();
        const todoRepository = new LotRepositoryInfra(datasource);        
        const ctrl = new LotController( todoRepository );       
        
        
        router.post('/',ctrl.post);        
        // router.use(AuthToken);
        router.get('/',ctrl.getLots);
        router.get('/:id',ctrl.get);
        router.put('/:id',ctrl.put);
        router.delete('/:id',ctrl.delete);

        return router;
    }
}