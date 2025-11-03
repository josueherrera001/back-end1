import { Router } from "express";
import { AuthToken } from "../../../Middlewares/authtoken";
import { SaleController } from "./salecontroller";
import { SaleDataSourceInfra } from "../../../infractructure/datasource/sale/sale.datasource.infra";
import { SaleRepositoryInfra } from "../../../infractructure/repositories/sales/sale.repository.infra";

export class SaleRoutes{

    static get route(): Router{
        const router = Router();

        const datasource = new SaleDataSourceInfra();
        const todoRepository = new SaleRepositoryInfra(datasource);        
        const ctrl = new SaleController( todoRepository ); 

        router.use(AuthToken);
        router.get('/',ctrl.getAll);
        router.get('/:id',ctrl.get); 
        router.post('/',ctrl.post); 
        router.put('/:id',ctrl.put);
        router.delete('/:id',ctrl.delete);

        return router;
    }
}