import { Router } from "express";
import { AccountMenuItemController } from "./accountMenuItemController";
import { AuthToken } from "../../Middlewares/authtoken";
import { AccountMenuItemDataSourceInfra } from "../../infractructure/datasource/accountMenuItem.datasource.infra";
import { AccountMenuItemRepositoryInfra } from "../../infractructure/repositories/accountmenuItem.repository.infra";

export class AccountMenuItemRoutes{

    static get route(): Router{
        const router = Router();

        const datasource = new AccountMenuItemDataSourceInfra();
        const todoRepository = new AccountMenuItemRepositoryInfra(datasource);        
        const ctrl = new AccountMenuItemController( todoRepository );       
        
        
        router.post('/',ctrl.post);        
        // router.use(AuthToken);
        router.get('/:id/full',ctrl.getAccountMenuItems);
        router.get('/:id',ctrl.get);
        router.put('/:id',ctrl.put);
        router.delete('/:id',ctrl.delete);

        return router;
    }
}