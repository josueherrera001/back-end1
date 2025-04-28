"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactRoutes = void 0;
const express_1 = require("express");
const contactController_1 = require("./contactController");
const contact_datasource_infra_1 = require("../../infractructure/datasource/contact.datasource.infra");
const contact_repository_infra_1 = require("../../infractructure/repositories/contact.repository.infra");
class ContactRoutes {
    static get route() {
        const router = (0, express_1.Router)();
        const datasource = new contact_datasource_infra_1.ContactDataSourceInfra();
        const todoRepository = new contact_repository_infra_1.ContactRepositoryInfra(datasource);
        const contactController = new contactController_1.ContactController(todoRepository);
        router.get('/', contactController.getContacts);
        router.get('/:id', contactController.get);
        router.post('/', contactController.post);
        router.put('/:id', contactController.put);
        router.delete('/:id', contactController.delete);
        return router;
    }
}
exports.ContactRoutes = ContactRoutes;
