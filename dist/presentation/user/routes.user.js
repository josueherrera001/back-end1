"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = require("express");
const userController_1 = require("./userController");
const user_repository_infra_1 = require("../../infractructure/repositories/user.repository.infra");
const user_datasource_infra_1 = require("../../infractructure/datasource/user.datasource.infra");
const email_service_1 = require("../../config/email.service");
const envs_1 = require("../../config/envs");
class UserRoutes {
    static get route() {
        const router = (0, express_1.Router)();
        const emailService = new email_service_1.EmailService(envs_1.envs.MAILER_SERVICE, envs_1.envs.MAILER_EMAIL, envs_1.envs.MAILER_SECRET_KEY, envs_1.envs.SEND_EMAIL);
        const datasource = new user_datasource_infra_1.UserDataSourceInfra(emailService);
        const todoRepository = new user_repository_infra_1.UserRepositoryInfra(datasource);
        const Ctrl = new userController_1.UserController(todoRepository);
        // router.use(Validator.validateToken);
        router.get('/', Ctrl.getUsers);
        router.get('/:id', Ctrl.get);
        router.post('/', Ctrl.post);
        router.put('/:id', Ctrl.put);
        router.delete('/:id', Ctrl.delete);
        return router;
    }
}
exports.UserRoutes = UserRoutes;
