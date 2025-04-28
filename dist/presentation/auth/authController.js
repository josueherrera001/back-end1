"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const domain_1 = require("../../domain");
const login_user_1 = require("../../domain/use-case/auth/login-user");
const validate_email_1 = require("../../domain/use-case/auth/validate-email");
const update_password_1 = require("../../domain/use-case/auth/update.password");
class AuthController {
    //** DI */
    constructor(Repository) {
        this.Repository = Repository;
        this.login = (req, res) => {
            const { UserName, Password } = req.body;
            new login_user_1.Login(this.Repository)
                .execute({ UserName, Password })
                .then(todos => res.json(todos))
                .catch(error => res.status(404).json({ error }));
        };
        this.validateEmail = (req, res) => {
            const token = req.params.token;
            new validate_email_1.ValidateEmail(this.Repository)
                .execute(token)
                .then(todo => res.json(todo))
                .catch(error => res.status(404).json({ error }));
        };
        this.ChangePassword = (req, res) => {
            const [error, Dto] = domain_1.UpdateAuthDto.update(req.body);
            if (error)
                return res.status(400).json(error);
            new update_password_1.ChangePassword(this.Repository)
                .execute(Dto)
                .then(todo => res.json(todo))
                .catch(error => res.status(404).json({ error }));
        };
    }
}
exports.AuthController = AuthController;
