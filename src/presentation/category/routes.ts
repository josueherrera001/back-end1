import { Router } from "express";
import { CategoryController } from "./categoryController";
import { AuthToken } from "../../Middlewares/authtoken";
import { CategoryDataSourceInfra } from "../../infractructure/datasource/category.datasource.infra";
import { CategoryRepositoryInfra } from "../../infractructure/repositories/category.repository.infra";

export class CategoryRoutes{

    static get route(): Router{
        const router = Router();

        const datasource = new CategoryDataSourceInfra();
        const todoRepository = new CategoryRepositoryInfra(datasource);        
        const ctrl = new CategoryController( todoRepository );       
        
        
        router.post('/',ctrl.post);        
        // router.use(AuthToken);
        router.get('/',ctrl.getCategories);
        router.get('/:id',ctrl.get);
        router.put('/:id',ctrl.put);
        router.delete('/:id',ctrl.delete);

        return router;
    }
}