"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactController = void 0;
const index_1 = require("../../domain/dtos/index");
const domain_1 = require("../../domain");
class ContactController {
    //** DI */
    constructor(contactRepository) {
        this.contactRepository = contactRepository;
        this.getContacts = (req, res) => {
            new domain_1.GetContacts(this.contactRepository)
                .execute()
                .then(todos => res.json(todos))
                .catch(error => res.status(404).json({ error }));
        };
        this.get = (req, res) => {
            const id = req.params.id;
            new domain_1.GetContact(this.contactRepository)
                .execute(id)
                .then(todo => res.json(todo))
                .catch(error => res.status(404).json({ error }));
        };
        this.post = (req, res) => {
            const [error, createContactDto] = index_1.CreateContactDto.create(req.body);
            if (error)
                return res.status(400).json(error);
            new domain_1.CreateContact(this.contactRepository)
                .execute(createContactDto)
                .then(todo => res.json(todo))
                .catch(error => res.status(404).json({ error }));
        };
        this.put = (req, res) => {
            const id = +req.params.id;
            const [error, updateTodoDto] = index_1.UpdateContactDto.create(Object.assign(Object.assign({}, req.body), { id }));
            if (error)
                return res.status(400).json(error);
            new domain_1.UpdateContact(this.contactRepository)
                .execute(updateTodoDto)
                .then(todo => res.json(todo))
                .catch(error => res.status(404).json({ error }));
        };
        this.delete = (req, res) => {
            const id = req.params.id;
            new domain_1.DeleteContact(this.contactRepository)
                .execute(id)
                .then(todo => res.json(todo))
                .catch(error => res.status(404).json({ error }));
        };
    }
}
exports.ContactController = ContactController;
