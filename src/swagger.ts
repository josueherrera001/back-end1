import path from 'path';
import { envs } from './config/envs';

import swaggerJsdoc, { OAS3Definition, OAS3Options } from "swagger-jsdoc";

const swaggerDefinition: OAS3Definition  = {  
        openapi:'3.0.0',
        info:{
            title:'API de Sistema de gestion de productos',
            version:'1.0.0',
        },
        servers: [
          {
            url: `http://localhost:${ envs.PORT }/api/${ envs.APP_API_VERSION }`,
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
                    required: ["UserName", "UserPass","RoleId"],
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
                  Address:{
                    type: "object",
                    required: ["LocationId","Country","Province","Location", "Street","StreetNumber","BetweenStreet"],
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
              required: ["fullName", "email","phone"],
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
              required: ["Name", "Url","phone"],
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
              required: ["MenuId","Name", "Url","phone"],
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
}
const swaggerOptions: OAS3Options = {
    swaggerDefinition,
    apis:[`${ path.join(__dirname, './presentation/router/*')}`]
  };
// apis:[`${ path.join(__dirname, './presentation/router/*')}`]
const swaggerSpec = swaggerJsdoc(swaggerOptions);
export default swaggerSpec;