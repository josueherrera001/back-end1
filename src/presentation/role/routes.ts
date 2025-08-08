import { Router } from "express";
import { RoleController } from "./roleController";
import { AuthToken } from "../../Middlewares/authtoken";
import { RoleRepositoryInfra } from "../../infractructure/repositories/role.repository.infra";
import { RoleDataSourceInfra } from "../../infractructure/datasource/role.datasource.infra";

export class RoleRoutes{

    static get route(): Router{
        const router = Router();

        const datasource = new RoleDataSourceInfra();
        const todoRepository = new RoleRepositoryInfra(datasource);        
        const ctrl = new RoleController( todoRepository );       
        
        
        router.post('/',ctrl.post);        
        // router.use(AuthToken);
        router.get('/',ctrl.getRoles);
        router.get('/:id',ctrl.get);
        router.put('/:id',ctrl.put);
        router.delete('/:id',ctrl.delete);

        return router;
    }
}