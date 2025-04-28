"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutes = void 0;
const express_1 = require("express");
const routes_1 = require("./contact/routes");
const envs_1 = require("../config/envs");
const routes_user_1 = require("./user/routes.user");
const routes_auth_1 = require("./auth/routes.auth");
class AppRoutes {
    static get route() {
        const router = (0, express_1.Router)();
        router.use(`/api/${envs_1.envs.APP_API_VERSION}/auth`, routes_auth_1.AuthRoutes.route);
        router.use(`/api/${envs_1.envs.APP_API_VERSION}/contacts`, routes_1.ContactRoutes.route);
        router.use(`/api/${envs_1.envs.APP_API_VERSION}/users`, routes_user_1.UserRoutes.route);
        return router;
    }
}
exports.AppRoutes = AppRoutes;
