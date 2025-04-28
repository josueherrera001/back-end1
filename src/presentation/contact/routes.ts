import { Router } from "express";
import { ContactController } from "./contactController";
import { ContactDataSourceInfra } from "../../infractructure/datasource/contact.datasource.infra";
import { ContactRepositoryInfra } from "../../infractructure/repositories/contact.repository.infra";
import { AuthToken } from "../../Middlewares/authtoken";

export class ContactRoutes{

    static get route(): Router{
        const router = Router();

        const datasource = new ContactDataSourceInfra();
        const todoRepository = new ContactRepositoryInfra(datasource);        
        const contactController = new ContactController( todoRepository );       
        
        
        router.post('/',contactController.post);        
        router.use(AuthToken);
        router.get('/',contactController.getContacts);
        router.get('/:id',contactController.get);
        router.put('/:id',contactController.put);
        router.delete('/:id',contactController.delete);

        return router;
    }
}