    // prisma/seed.ts
    import { PrismaClient } from '@prisma/client';

    const prisma = new PrismaClient();

    async function main() {
      // Create user records
      await prisma.menues.createMany({
        data: [
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
        }
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
                }
            },
        })
    }

main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
    })
    .finally(async () => {
    await prisma.$disconnect();
    });