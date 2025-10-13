import { Router } from "express";
import { SubCategoryController } from "./subcategoryController";
import { AuthToken } from "../../Middlewares/authtoken";
import { SubCategoryRepositoryInfra } from "../../infractructure/repositories/subcategory.repository.infra";
import { SubCategoryDataSourceInfra } from "../../infractructure/datasource/subcategory.datasource.infra";

export class SubCategoryRoutes{

    static get route(): Router{
        const router = Router();

        const datasource = new SubCategoryDataSourceInfra();
        const todoRepository = new SubCategoryRepositoryInfra(datasource);        
        const ctrl = new SubCategoryController( todoRepository );       
        
        
        router.get('/sub-category/:id',ctrl.getSubCategories);
        router.get('/:id',ctrl.get); 

        router.use(AuthToken);
        router.post('/',ctrl.post); 
        router.put('/:id',ctrl.put);
        router.delete('/:id',ctrl.delete);

        return router;
    }
}