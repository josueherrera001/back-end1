import { Router } from "express";
import { PointDataSourceInfra } from "../../../infractructure/datasource/sale/point.datasource.infra";
import { PointRepositoryInfra } from "../../../infractructure/repositories/sales/point.repository.infra";
import { PointController } from "./pointcontroller";
import { AuthToken } from "../../../Middlewares/authtoken";

export class PointRoutes{

    static get route(): Router{
        const router = Router();

        const datasource = new PointDataSourceInfra();
        const todoRepository = new PointRepositoryInfra(datasource);        
        const ctrl = new PointController( todoRepository ); 

        router.use(AuthToken);
        router.get('/',ctrl.getAll);
        router.get('/:id',ctrl.get); 
        router.post('/',ctrl.post); 
        router.put('/:id',ctrl.put);
        router.delete('/:id',ctrl.delete);

        return router;
    }
}