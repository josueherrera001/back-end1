import express, { Router } from 'express';
import compression from 'compression';
import path from 'path';
import swaggerui from 'swagger-ui-express';
import cors from 'cors';

import swaggerspc from './../swagger';
import { configureBigIntSerialization } from '../utils/bigint-serializer';
import { bigIntSerializer } from '../Middlewares/bigint-middleware';

interface Options{
    PORT: number; 
    ROUTER: Router;
    PUBLIC_PATH?: string;
}

export class Server{
    private app = express();
    private readonly port: number;
    private readonly publicPath: string;
    private readonly router: Router;

    constructor(options: Options){

        const { PORT, ROUTER, PUBLIC_PATH ='public' } = options;

        this.port = PORT;
        this.publicPath = PUBLIC_PATH;
        this.router = ROUTER;
    }

    async start (){

        configureBigIntSerialization();
        //** Middlewares */
        this.app.use(express.json()) //* To transform the data to raw json example
        this.app.use(express.urlencoded({ extended:true })) //* In case you send the data in another way, for example x-www-form-urlencoded
        this.app.use( compression() );
        this.app.use(cors()); 

        this.app.use(bigIntSerializer);

        //** Public folder */
        this.app.use(express.static(this.publicPath));

        //** Routes */
        this.app.use( this.router );

        /**
         * Swagger implementation
         */
         this.app.use('/api-docs',swaggerui.serve, swaggerui.setup(swaggerspc));
         
        this.app.get('*', (req, res) =>{
            const indexPath = path.join(__dirname + `../../../${ this.publicPath }/index.html`);
            res.sendFile(indexPath);
        });

        this.app.listen(this.port, () =>{
            console.log(`Running port ${ this.port }`)
        });
    }
}