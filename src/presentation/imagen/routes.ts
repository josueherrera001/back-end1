import { Router } from "express";
import { AuthToken } from "../../Middlewares/authtoken";
import { ImagenController } from "./imageController";
import { upload } from '../../Middlewares/multer';

export class ImagenRoutes{

    static get route(): Router{
        const router = Router();     
        const ctrl = new ImagenController( );       
        
        
        router.post('/', upload.single('file'),ctrl.post);        
        // router.use(AuthToken);
        router.get('/', upload.single('file'),ctrl.getImagenUrl);
        router.put('/:id', upload.single('file'),ctrl.put);
        router.delete('/:id', upload.single('file'),ctrl.delete);

        return router;
    }
}