import { Router } from "express";
import { MenuController } from "./menuController";
import { AuthToken } from "../../Middlewares/authtoken";
import { MenuDataSourceInfra } from "../../infractructure/datasource/menu.datasource.infra";
import { MenuRepositoryInfra } from "../../infractructure/repositories/menu.repository.infra";

export class MenuRoutes{

    static get route(): Router{
        const router = Router();

        const datasource = new MenuDataSourceInfra();
        const todoRepository = new MenuRepositoryInfra(datasource);        
        const ctrl = new MenuController( todoRepository );       
        
        
        router.post('/',ctrl.post);        
        // router.use(AuthToken);
        router.get('/',ctrl.getMenus);
        router.get('/:id',ctrl.get);
        router.put('/:id',ctrl.put);
        router.delete('/:id',ctrl.delete);

        return router;
    }
}