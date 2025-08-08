import { Router } from "express";
import { ProductController } from "./productController";
import { AuthToken } from "../../Middlewares/authtoken";
import { ProductDataSourceInfra } from "../../infractructure/datasource/product.datasource.infra";
import { ProductRepositoryInfra } from "../../infractructure/repositories/product.repository.infra";

export class ProductRoutes{

    static get route(): Router{
        const router = Router();

        const datasource = new ProductDataSourceInfra();
        const todoRepository = new ProductRepositoryInfra(datasource);        
        const ctrl = new ProductController( todoRepository );       
        
        
        router.post('/',ctrl.post);        
        // router.use(AuthToken);
        router.get('/',ctrl.getProducts);
        router.get('/:id',ctrl.get);
        router.put('/:id',ctrl.put);
        router.delete('/:id',ctrl.delete);

        return router;
    }
}