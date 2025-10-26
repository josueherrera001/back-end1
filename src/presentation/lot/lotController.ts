import { Request, Response } from "express";
import { CreateLotDto,UpdateLotDto } from "../../domain/dtos/index";
import { LotRepository, GetLots, GetLot, CreateLot, UpdateLot, DeleteLot } from '../../domain';
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { ErrorSpecific } from "../../helpers";


export class LotController{

    //** DI */
    constructor(
        private readonly Repository: LotRepository
    ){}

    public getLots = (req:Request, res:Response) =>{
        new GetLots( this.Repository )
        .execute()
        .then( todos => res.json( todos ))
        .catch ( error =>  {
            if( error instanceof PrismaClientKnownRequestError)
                return ErrorSpecific.ErrorDB( error );
            return res.status(404).json({ error })}
        );
    }

    public get = (req:Request, res:Response) =>{
        const id = req.params.id;
        new GetLot( this.Repository )
        .execute( id )
        .then( todo => res.json(todo) )
        .catch ( error =>  {
            if( error instanceof PrismaClientKnownRequestError)
                return ErrorSpecific.ErrorDB( error );
            return res.status(404).json({ error })}
        );
    }

    public post = (req:Request, res:Response) =>{
        const [error, Dto] = CreateLotDto.create(req.body);
        if ( error ) return res.status(400).json(error);

       new CreateLot( this.Repository )
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

        const [error, Dto] = UpdateLotDto.update({...req.body, id});
        if ( error ) return res.status(400).json(error);
     
        new UpdateLot( this.Repository )
        .execute( Dto! )
        .then( todo => res.json(todo) )
        .catch ( error =>  {
            if( error instanceof PrismaClientKnownRequestError)
                return ErrorSpecific.ErrorDB( error );
            return res.status(404).json({ error })}
        );
    }

    public delete = (req:Request, res:Response) =>{
        const id = req.params.id;
     
        new DeleteLot( this.Repository )
        .execute( id! )
        .then( todo => res.json(todo) )
        .catch ( error =>  {
            if( error instanceof PrismaClientKnownRequestError)
                return ErrorSpecific.ErrorDB( error );
            return res.status(404).json({ error })}
        );
    }
}