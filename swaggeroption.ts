import swaggerAutogen from 'swagger-autogen';

const swaggerOptions = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "My Awesome API",
        version: "1.0.0",
      },
      servers: [
        {
          url: "http://localhost:3000"
        }
      ]
    },
    apis: ["./src/routes/*.ts"] // Ruta a tus archivos de rutas
  };
  export default swaggerOptions;