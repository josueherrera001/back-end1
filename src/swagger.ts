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
            url: `http://localhost:3000/api/${ envs.APP_API_VERSION }`,
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
                    required: ["LocationId", "Street","StreetNumber","BetweenStreet"],
                    properties: {
                      LocationId: {
                        type: "string",
                      },
                      Street: {
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