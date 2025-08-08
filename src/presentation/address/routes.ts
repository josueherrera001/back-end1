import { Router } from "express";
import { AddressController   } from "./addressController";
import { AddressDataSourceInfra } from "../../infractructure/datasource/address.datasource.infra";
import { AddressRepositoryInfra } from "../../infractructure/repositories/addressrepository.infra";
import { AuthToken } from "../../Middlewares/authtoken";

export class AddressRoutes{

    static get route(): Router{
        const router = Router();

        const datasource = new AddressDataSourceInfra();
        const todoRepository = new AddressRepositoryInfra(datasource);        
        const ctrl = new AddressController( todoRepository );              
               
        router.use(AuthToken);
        router.post('/',ctrl.post); 
        router.get('/',ctrl.getAddresses);
        router.get('/:id',ctrl.get);
        router.put('/:id',ctrl.put);
        router.delete('/:id',ctrl.delete);

        return router;
    }
}