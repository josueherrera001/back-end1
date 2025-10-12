    // prisma/seed.ts
    import { PrismaClient } from '@prisma/client';

    const prisma = new PrismaClient();

    async function main() {
      // Create user records
    await prisma.menues.createMany({
        data: 
        [
            {
                Description: "Pagina principal",
                Name: "Inicio",
                HasSubMenu: false,
                Url: "/",
                Position: 0,
                CreatedDate: new Date(),
            },
            {
                Description: "Para contactar",
                Name: "Contacto",
                HasSubMenu: false,
                Url: "Contact",
                Position: 2,
                CreatedDate: new Date(),                
            },
            
        ],
      });

    await prisma.menues.create({
            data: {
                Description: "Todos las categorias",
                Name: "Categoria",
                HasSubMenu: true,
                Url: "category",
                Position: 1,
                CreatedDate: new Date(),
                SubMenu: {
                    create: [
                        {
                            Description: "Todo relacionada al deporte",
                            Name: "Deportes",
                            Url: "sport",
                            CreatedDate: new Date(),
                        },
                        {
                            Description: "Todo relacionada al juguete",
                            Name: "Juguetes",
                            Url: "game",
                            CreatedDate: new Date(),
                        },
                        {
                            Description: "Dpto de electronica",
                            Name: "Electrónica",
                            Url: "electronic",
                            CreatedDate: new Date(),
                        },
                        {
                            Description: "Todo relacionada con hogar",
                            Name: "hogar",
                            Url: "furniture",
                            CreatedDate: new Date(),
                        },
                        {
                            Description: "Dpto de moda",
                            Name: "moda",
                            Url: "mode",
                            CreatedDate: new Date(),
                        }
                    ]
                },
                
            },
            
        });
     
          await prisma.menues.create({
            data: {
                Description: "Gestionar todos los ABM",
                Name: "ABM",
                HasSubMenu: true,
                Url: " ",
                Position: 3,
                CreatedDate: new Date(),
                SubMenu: {
                    create: [
                        {
                            Description: "Todo relacionada al producto",
                            Name: "ABM Productos",
                            Url: "ProductActions",
                            CreatedDate: new Date(),
                        },
                        {
                            Description: "Todo relacionada al usuario",
                            Name: "ABM Usuarios",
                            Url: "UserActions",
                            CreatedDate: new Date(),
                        },
                        {
                            Description: "Todo relacionada a las categorias",
                            Name: "ABM Categorias",
                            Url: "categoryactions",
                            CreatedDate: new Date(),
                        },
                        {
                            Description: "Todo relacionada con tipo de pago",
                            Name: "ABM tipo de pago",
                            Url: "paymenttypeactions",
                            CreatedDate: new Date(),
                        },
                        {
                            Description: "Todo relacionada con presentaciones",
                            Name: "ABM Presentaciones",
                            Url: "presentationactions",
                            CreatedDate: new Date(),
                        }
                    ]
                },
                
            },
            
        });

     await prisma.roles.createMany({
        data: [
            {
                Name: "Admin",
                Description: "Administrador del sistema",
                CreatedDate: new Date(),
            },
            {
                Name: "Empleado",
                Description: "Usuario vendedor del sistema",
                CreatedDate: new Date(),
            },
            {
                Name: "Proveedor",
                Description: "Usuario proveedor del sistema",
                CreatedDate: new Date(),
            },
            {
                Name: "Logistica",
                Description: "Usuario encargado de la logistica del sistema",
                CreatedDate: new Date(),
            },
            {
                Name: "Marketing",
                Description: "Usuario encargado de marketing del sistema",
                CreatedDate: new Date(),
            },
            {
                Name: "Soporte",
                Description: "Usuario encargado de soporte del sistema",
                CreatedDate: new Date(),
            },
            {
                Name: "Finanzas",
                Description: "Usuario encargado de finanzas del sistema",
                CreatedDate: new Date(),
                State:2
            },
            {
                Name: "RRHH",
                Description: "Usuario encargado de recursos humanos del sistema",
                CreatedDate: new Date(),
                State:2
            },
            {
                Name: "Compras",
                Description: "Usuario encargado de compras del sistema",
                CreatedDate: new Date(),
            },
            {
                Name: "Ventas",
                Description: "Usuario encargado de ventas del sistema",
                CreatedDate: new Date(),
            },
            {
                Name: "Desarrollador",
                Description: "Usuario encargado del desarrollo del sistema",
                CreatedDate: new Date(),
                State:2
            },
            {
                Name: "Analista",
                Description: "Usuario encargado del analisis del sistema",
                CreatedDate: new Date(),
                State:2
            },
            {
                Name: "Diseñador",
                Description: "Usuario encargado del diseño del sistema",    
                CreatedDate: new Date(),
                State:2
            },
            {
                Name: "Tester",
                Description: "Usuario encargado de las pruebas del sistema",
                CreatedDate: new Date(),
                State:2
            },
            {
                Name: "Administrador de base de datos",
                Description: "Usuario encargado de la administración de la base de datos del sistema",
                CreatedDate: new Date(),
                State:2
            },
            {
                Name: "Administrador de red",
                Description: "Usuario encargado de la administración de la red del sistema",
                CreatedDate: new Date(),
                State:2
            },
            {
                Name: "Administrador de seguridad",
                Description: "Usuario encargado de la seguridad del sistema",
                CreatedDate: new Date(),
                State:2
            },
            {
                Name: "Administrador de sistemas",
                Description: "Usuario encargado de la administración de los sistemas del sistema",
                CreatedDate: new Date(),
                State:2
            },
            {
                Name: "Administrador de proyectos",
                Description: "Usuario encargado de la administración de los proyectos del sistema",
                CreatedDate: new Date(),
                State:2
            },
            {
                Name: "Administrador de calidad",
                Description: "Usuario encargado de la administración de la calidad del sistema",
                CreatedDate: new Date(),
                State:2
            },
            {
                Name: "Administrador de servicios",
                Description: "Usuario encargado de la administración de los servicios del sistema",
                CreatedDate: new Date(),
                State:2
            },
            {
                Name: "Administrador de infraestructura",
                Description: "Usuario encargado de la administración de la infraestructura del sistema",
                CreatedDate: new Date(),
                State:2
            },
            {
                Name: "Administrador de operaciones",
                Description: "Usuario encargado de la administración de las operaciones del sistema",
                CreatedDate: new Date(),
                State:2
            }
        ],
    });

    }

main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
    })
    .finally(async () => {
    await prisma.$disconnect();
    });