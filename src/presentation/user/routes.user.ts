import { Router } from "express";
import { UserController } from "./userController";
import { UserRepositoryInfra } from "../../infractructure/repositories/user.repository.infra";
import { UserDataSourceInfra } from "../../infractructure/datasource/user.datasource.infra";
import { EmailService } from "../../config/email.service";
import { envs } from "../../config/envs";
import { AuthToken } from "../../Middlewares/authtoken";

export class UserRoutes{

    static get route(): Router{
        const router = Router();

        const emailService = new EmailService(
            envs.MAILER_SERVICE,
            envs.MAILER_EMAIL,
            envs.MAILER_SECRET_KEY,
            envs.SEND_EMAIL,
          );
        const datasource = new UserDataSourceInfra(emailService);
        const todoRepository = new UserRepositoryInfra(datasource);        
        const Ctrl = new UserController( todoRepository );    


        router.post('/',Ctrl.post);
        
        router.use(AuthToken);
        router.get('/',Ctrl.getUsers);     
        router.get('/:id',Ctrl.get);
        router.put('/:id',Ctrl.put);
        router.delete('/:id',Ctrl.delete);

        return router;
    }
}