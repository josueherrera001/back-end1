# Info sobre el tp

## :env

    Se debe creo en archivo .env y copiar y pegar esos variables para el funcionamiento del sistema

        PORT={{el nro del puerto pro ejemplo 3000}}
        APP_API_VERSION={version por ejemplo v1}
        JWT_SEED={codigo secreto para el toke "que no sea facil a detectar por ejemplo un guid"}
        PUBLIC_PATH=public

        MySQL_USER={tu usuario de la DB }
        MySQL_DB={nombre de la DB}
        MySQL_PORT={El puerto de la DB}
        MySQL_PASSWORD={La contraseña de la DB}


        WEBSERVICE_URL={tu api para el envio de correo por ejemplo "http://localhost:3000/api"}
        MAILER_SERVICE={el gestor para envial el correo por ejemple "gmail"}
        MAILER_EMAIL={el correo de configuracion para el envia por ejemplo "xxxxxxx@gmail.com"}
        MAILER_SECRET_KEY={ La clave secreta de tu gestor}
        SEND_EMAIL={ para habilitar si lo envias o no "bool"}

    Al clonar el sistema se debe instalar todos los paquetes necesarios para el funcionamiento del sistema con el comando
        "npm install o npm i"

    ## :Prisma
    Luego se tiene que correo el script de migracion para que pueda crear la base de datos.
        "npx prisma db push "
    Con ese script se va a generar la base de datos, si esta bien configurador la cadena de conexion a tu server de base de datos.

    Cualquier modifiacacion que se realiza en la schema se tiene que correr ese script
    "npx prisma generate " para que pueda refrescar el modelo.

    ## :Cloudinary
        /* Coudinary*/
        CLOUD_NAME=Root
        CLOUDINARY_API_KEY=936141783849336 
        CLOUDINARY_API_SECRET=usaYNQ7K62xe5xfrHGYvHV8-wuM
        CLOUD_URL=CLOUDINARY_URL=cloudinary://936141783849336:usaYNQ7K62xe5xfrHGYvHV8-wuM@dvlw1tyyc
        VERSION=version
        CLOUDINARY_UPLOAD_PRESET=preset
        BASE_UPLOAD_PRESET=carpeta
    
    ##: Seed
        Para insertar menu y submenu por defecto hay que correr ese script para generar los datos
        "npx prisma db seed"