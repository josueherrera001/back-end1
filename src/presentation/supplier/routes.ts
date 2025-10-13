import { Router } from "express";  
import { SupplierController } from "./supplierController";  
import { AuthToken } from "../../Middlewares/authtoken";  
import { SupplierDataSourceInfra } from "../../infractructure/datasource/supplier.datasource.infra";  
import { SupplierRepositoryInfra } from "../../infractructure/repositories/supplier.repository.infra";  
  
export class SupplierRoutes{  
  
    static get route(): Router{  
        const router = Router();  
  
        const datasource = new SupplierDataSourceInfra();  
        const supplierRepository = new SupplierRepositoryInfra(datasource);          
        const ctrl = new SupplierController( supplierRepository );         
          
          
        router.post('/',ctrl.post);          
        // router.use(AuthToken);  
        router.get('/',ctrl.getSuppliers);  
        router.get('/:id',ctrl.get);  
        router.put('/:id',ctrl.put);  
        router.delete('/:id',ctrl.delete);  
  
        return router;  
    }  
}