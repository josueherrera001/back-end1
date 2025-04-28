"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validator = void 0;
const custom_error_1 = require("../domain/error/custom.error");
const jwt_adapter_1 = require("../config/jwt.adapter");
const data_1 = require("../data");
class Validator {
    static validateToken(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let token;
                if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
                    token = req.headers.authorization.split(' ')[1];
                }
                if (!token)
                    throw custom_error_1.CustomError.unAuthorized('No ha iniciado sesión, por favor inicie sesión para obtener acceso!');
                const payload = yield jwt_adapter_1.JwtAdapter.validateToken(token);
                if (!payload)
                    throw custom_error_1.CustomError.unAuthorized('Token invalido');
                const { Id } = payload;
                const currentUser = yield data_1.prisma.accounts.findFirst({
                    where: {
                        Id: Id
                    }
                });
                if (!currentUser)
                    throw custom_error_1.CustomError.notFound("No se encuentra ese usuario");
                req.userlogin = currentUser;
                next();
            }
            catch (error) {
                res.status(404).json({ error });
            }
        });
    }
}
exports.Validator = Validator;
