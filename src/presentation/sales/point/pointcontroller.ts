
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { Request, Response } from "express";
import { CreatePointDto, PointRepository, UpdatePointDto } from "../../../domain";
import { GetAll } from "../../../domain/use-case/sale/point/get-points";
import { ErrorSpecific } from "../../../helpers";
import { Get } from "../../../domain/use-case/sale/point/get-point";
import { Update } from '../../../domain/use-case/sale/point/update-point';
import { Delete } from '../../../domain/use-case/sale/point/delete-point';
import { Create } from "../../../domain/use-case/sale/point/create-point";

export class PointController {
    constructor(
        private readonly Repository: PointRepository
    ){}
    
        public getAll = (req:Request, res:Response) =>{
            const id = req.params.id;
            new GetAll( this.Repository )
            .execute( id )
            .then( todos => res.json( todos ))
            .catch ( error =>  {
                if( error instanceof PrismaClientKnownRequestError)
                    return ErrorSpecific.ErrorDB( error );
                return res.status(404).json({ error })}
            );
        }
    
        public get = (req:Request, res:Response) =>{
            const id = req.params.id;
            new Get( this.Repository )
            .execute( id )
            .then( todo => res.json(todo) )
            .catch ( error =>  {
                if( error instanceof PrismaClientKnownRequestError)
                    return ErrorSpecific.ErrorDB( error );
                return res.status(404).json({ error })}
            );
        }
    
        public post = (req:Request, res:Response) =>{
            const [error, Dto] = CreatePointDto.create(req.body);
            if ( error ) return res.status(400).json(error);
    
           new Create( this.Repository )
           .execute( Dto! )
           .then( todo => res.json(todo) )
           .catch ( error =>  {
                if( error instanceof PrismaClientKnownRequestError)
                    return ErrorSpecific.ErrorDB( error );
                return res.status(404).json({ error })}
            );
        }
    
        public put = (req:Request, res:Response) =>{
    
            const id = +req.params.id;
    
            const [error, Dto] = UpdatePointDto.create({...req.body, id});
            if ( error ) return res.status(400).json(error);
         
            new Update( this.Repository )
            .execute(id.toString(),Dto! )
            .then( todo => res.json(todo) )
            .catch ( error =>  {
                if( error instanceof PrismaClientKnownRequestError)
                    return ErrorSpecific.ErrorDB( error );
                return res.status(404).json({ error })}
            );
        }
    
        public delete = (req:Request, res:Response) =>{
            const id = req.params.id;
         
            new Delete( this.Repository )
            .execute( id! )
            .then( todo => res.json(todo) )
            .catch ( error =>  {
                if( error instanceof PrismaClientKnownRequestError)
                    return ErrorSpecific.ErrorDB( error );
                return res.status(404).json({ error })}
            );
        }


}