import { Request, Response } from "express";
import { CloudinyPhoto } from "../../Middlewares/cloudinary.photo";
import { handleMulterError } from "../../Middlewares/multer";
import { envs } from "../../config/envs";


export class ImagenController{
    constructor(){}

    public getImagenUrl = async (req:Request, res:Response,next:any) =>{
            const { publicId } = req.body;
            return await CloudinyPhoto.getPhotoUrl(publicId)
        .then( responses => res.json( responses ))
        .catch ( error => handleMulterError(error,req,res,next)); 
    }

    public post = (req:Request, res:Response,next:any) =>{
        CloudinyPhoto.uploadPhoto( req.file as Express.Multer.File )
        .then( responses => res.json( responses ))
        .catch ( error => handleMulterError(error,req,res,next));        
    }

    public put = (req:Request, res:Response,next:any) =>{
        const { imageUrl, publicId } = req.body;
        CloudinyPhoto.updatePhoto( imageUrl, publicId )
        .then( responses => res.json( responses ))
        .catch ( error => handleMulterError(error,req,res,next)); 
    }

    public delete = (req:Request, res:Response,next:any) =>{
        const id = req.params.id;
        CloudinyPhoto.deletePhoto( `${ envs.BASE_UPLOAD_PRESET }/${id}` )
        .then( responses => res.json( responses ))
        .catch ( error => handleMulterError(error,req,res,next)); 
    }
}