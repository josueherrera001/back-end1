import { Router } from "express";
import { SubMenuController } from "./submenuController";
import { AuthToken } from "../../Middlewares/authtoken";
import { SubMenuDataSourceInfra } from "../../infractructure/datasource/submenu.datasource.infra";
import { SubMenuRepositoryInfra } from "../../infractructure/repositories/submenu.repository.infra";

export class SubMenuRoutes{

    static get route(): Router{
        const router = Router();

        const datasource = new SubMenuDataSourceInfra();
        const todoRepository = new SubMenuRepositoryInfra(datasource);        
        const ctrl = new SubMenuController( todoRepository );       
        
        
        router.post('/',ctrl.post);        
        // router.use(AuthToken);
        router.get('/',ctrl.getSubMenus);
        router.get('/:id',ctrl.get);
        router.put('/:id',ctrl.put);
        router.delete('/:id',ctrl.delete);

        return router;
    }
}