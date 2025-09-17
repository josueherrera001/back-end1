"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const envs_1 = require("./config/envs");
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'API de Sistema de gestion de productos',
        version: '1.0.0',
    },
    servers: [
        {
            url: `http://localhost:${envs_1.envs.PORT}/api/${envs_1.envs.APP_API_VERSION}`,
        },
    ],
    components: {
        securitySchemes: {
            bearerAuth: {
                type: "http",
                scheme: "bearer",
            },
        },
        schemas: {
            createUser: {
                type: "object",
                required: ["FirstName", "LastName", "Email", "Phone"],
                properties: {
                    FirstName: {
                        type: "string",
                    },
                    LastName: {
                        type: "string",
                    },
                    Email: {
                        type: "string",
                    },
                    Phone: {
                        type: "string",
                    },
                    auth: {
                        type: "object",
                        required: ["UserName", "UserPass", "RoleId"],
                        properties: {
                            UserName: {
                                type: "string",
                            },
                            UserPass: {
                                type: "string",
                            },
                            RoleId: {
                                type: "string",
                            },
                        },
                    },
                    Address: {
                        type: "object",
                        required: ["LocationId", "Country", "Province", "Location", "Street", "StreetNumber", "BetweenStreet"],
                        properties: {
                            Country: {
                                type: "string",
                            },
                            Province: {
                                type: "string",
                            },
                            Street: {
                                type: "string",
                            },
                            Location: {
                                type: "string",
                            },
                            StreetNumber: {
                                type: "string",
                            },
                            BetweenStreet: {
                                type: "string",
                            },
                        },
                    }
                },
            },
            UpdateUser: {
                type: "object",
                required: ["FirstName", "LastName", "Email", "Phone"],
                properties: {
                    FirstName: {
                        type: "string",
                    },
                    LastName: {
                        type: "string",
                    },
                    Email: {
                        type: "string",
                    },
                    Phone: {
                        type: "string",
                    }
                },
            },
            contact: {
                type: "object",
                required: ["fullName", "email", "phone"],
                properties: {
                    fullName: {
                        type: "string",
                    },
                    email: {
                        type: "string",
                    },
                    phone: {
                        type: "string",
                    },
                    description: {
                        type: "string",
                    },
                },
            },
            auth: {
                type: "object",
                required: ["UserName", "UserPass"],
                properties: {
                    UserName: {
                        type: "string",
                    },
                    UserPass: {
                        type: "string",
                    },
                },
            },
            UpdateAuth: {
                type: "object",
                required: ["OldUserPass", "UserPass"],
                properties: {
                    OldUserPass: {
                        type: "string",
                    },
                    UserPass: {
                        type: "string",
                    },
                },
            },
            menu: {
                type: "object",
                required: ["Name", "Url", "phone"],
                properties: {
                    Name: {
                        type: "string",
                    },
                    Url: {
                        type: "string",
                    },
                    HasSubMenu: {
                        type: "boolean",
                    },
                    Description: {
                        type: "string",
                    },
                },
            },
            submenu: {
                type: "object",
                required: ["MenuId", "Name", "Url", "phone"],
                properties: {
                    MenuId: {
                        type: "string",
                    },
                    Name: {
                        type: "string",
                    },
                    Url: {
                        type: "string",
                    },
                    Description: {
                        type: "string",
                    },
                },
            },
        },
    },
};
const swaggerOptions = {
    swaggerDefinition,
    apis: [`${path_1.default.join(__dirname, './presentation/router/*')}`]
};
// apis:[`${ path.join(__dirname, './presentation/router/*')}`]
const swaggerSpec = (0, swagger_jsdoc_1.default)(swaggerOptions);
exports.default = swaggerSpec;
