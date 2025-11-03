import { Router } from "express";
import { AuthToken } from "../../../Middlewares/authtoken";
import { SaleDetailDataSounrceInfra } from "../../../infractructure/datasource/sale/saledatail.datasource";
import { SaleDetailReposoitoryInfra } from "../../../infractructure/repositories/sales/saledetail.repository.infra";
import { SaleDetailController } from "./saledetailcontroller";

export class SaleDetailRoutes{

    static get route(): Router{
        const router = Router();

        const datasource = new SaleDetailDataSounrceInfra();
        const todoRepository = new SaleDetailReposoitoryInfra(datasource);        
        const ctrl = new SaleDetailController( todoRepository ); 

        router.use(AuthToken);
        router.get('/',ctrl.getAll);
        router.get('/:id',ctrl.get); 
        router.post('/',ctrl.post); 
        router.put('/:id',ctrl.put);
        router.delete('/:id',ctrl.delete);

        return router;
    }
}