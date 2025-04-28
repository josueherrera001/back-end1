import { Response } from "express";
import { CustomError } from "../helpers/error/custom.error";
import { JwtAdapter } from "../config/jwt.adapter";
import { prisma } from "../data";

export const AuthToken = async(req:any, res:Response, next: any) =>{
        try {
            let token;
            const{ authorization } = req.headers;
        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            token = req.headers.authorization.split(' ')[1];
        }

        if(!token) throw CustomError.unAuthorized('No ha iniciado sesión, por favor inicie sesión para obtener acceso!');
         
        const payload = await JwtAdapter.validateToken( token);
        if ( !payload ) throw CustomError.unAuthorized('Token invalido');
        
        const { Id } = payload as { Id: string};
        const currentUser = await prisma.accounts.findFirst({
                include:{
                    Role:true     
                },
                where: {
                Id:Id
            }
        });
         
        if( !currentUser ) throw CustomError.notFound("No se encuentra ese usuario");
        req.userlogin = currentUser;

        next();
        } catch (error) {
            res.status(404).json({ error })
        }
        
    }