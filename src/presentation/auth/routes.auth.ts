import { Router } from "express";
import { AuthController } from "./authController";
import { AuthDataSourceInfra } from "../../infractructure/datasource/auth.datasource.infra";
import { AuthRepositoryInfra } from "../../infractructure/repositories/auth.repository.infra";
import { AuthToken } from "../../Middlewares/authtoken";

export class AuthRoutes{

    static get route(): Router{
        const router = Router();

        const datasource = new AuthDataSourceInfra();
        const todoRepository = new AuthRepositoryInfra(datasource);        
        const ctrl = new AuthController( todoRepository );

        router.post('/',ctrl.login);  
        router.get('/validate-email/:token',ctrl.validateEmail);
        router.use(AuthToken);
        router.put('/change/:id',AuthToken,ctrl.ChangePassword);

        return router;
    }
}