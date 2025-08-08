import { Router } from "express";
import { PresentationController } from "./presentationController";
import { AuthToken } from "../../Middlewares/authtoken";
import { MenuDataSourceInfra } from "../../infractructure/datasource/menu.datasource.infra";
import { MenuRepositoryInfra } from "../../infractructure/repositories/menu.repository.infra";
import { PresentationDataSourceInfra } from "../../infractructure/datasource/presentation.datasource.infra";
import { PresentationRepositoryInfra } from "../../infractructure/repositories/presentation.repository.infra";

export class PresentationRoutes{

    static get route(): Router{
        const router = Router();

        const datasource = new PresentationDataSourceInfra();
        const todoRepository = new PresentationRepositoryInfra(datasource);        
        const ctrl = new PresentationController( todoRepository );       
        
        
        router.post('/',ctrl.post);        
        // router.use(AuthToken);
        router.get('/',ctrl.getPresentations);
        router.get('/:id',ctrl.get);
        router.put('/:id',ctrl.put);
        router.delete('/:id',ctrl.delete);

        return router;
    }
}