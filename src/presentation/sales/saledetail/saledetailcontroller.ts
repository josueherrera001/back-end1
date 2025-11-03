
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { Request, Response } from "express";
import { CreateSaleDetailDto, SaleDetailRepository, UpdateSaleDetailDto} from "../../../domain";
import { ErrorSpecific } from "../../../helpers";
import { GetAll } from "../../../domain/use-case/sale/saledetail/get-saledetails";
import { Get } from "../../../domain/use-case/sale/saledetail/get-saledetail";
import { Create } from "../../../domain/use-case/sale/saledetail/create-saledetail";
import { Update } from "../../../domain/use-case/sale/saledetail/update-saledetail";
import { Delete } from "../../../domain/use-case/sale/saledetail/delete-saledetail";

export class SaleDetailController {
    constructor(
        private readonly Repository: SaleDetailRepository
    ){}
    
        public getAll = (req:Request, res:Response) =>{
            new GetAll( this.Repository )
            .execute( )
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
            const [error, Dto] = CreateSaleDetailDto.create(req.body);
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
    
            const [error, Dto] = UpdateSaleDetailDto.create({...req.body, id});
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