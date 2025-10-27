import { Request, Response } from "express";
import { CreateProductDto,  UpdateProductDto } from "../../domain/dtos/index";
import { ProductRepository, GetProducts, GetProduct, CreateProduct, UpdateProduct, DeleteProduct } from '../../domain';
import { PrismaClientKnownRequestError, PrismaClientValidationError } from "@prisma/client/runtime/library";
import { ErrorSpecific } from "../../helpers";


export class ProductController{

    //** DI */
    constructor(
        private readonly Repository: ProductRepository
    ){}

    public getProducts = (req:Request, res:Response) =>{
        new GetProducts( this.Repository )
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
        new GetProduct( this.Repository )
        .execute( id )
        .then( todo => res.json(todo) )
        .catch ( error =>   {
            if( error instanceof PrismaClientKnownRequestError)
                return ErrorSpecific.ErrorDB( error );
            return res.status(404).json({ error })}
        );
    }

    public post = (req:Request, res:Response) =>{
        const [error, Dto] = CreateProductDto.create(req.body);
        if ( error ) return res.status(400).json(error);

       new CreateProduct( this.Repository )
       .execute( Dto! )
       .then( todo => res.json(todo) )
       .catch ( error =>  {
            if( error instanceof PrismaClientKnownRequestError || error instanceof PrismaClientValidationError)
                return ErrorSpecific.ErrorDB( error );
            return res.status(404).json({ error })}
        );
    }

    public put = (req:Request, res:Response) =>{

        const id = +req.params.id;

        const [error, Dto] = UpdateProductDto.update({...req.body, id});
        if ( error ) return res.status(400).json(error);
     
        new UpdateProduct( this.Repository )
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
     
        new DeleteProduct( this.Repository )
        .execute( id! )
        .then( todo => res.json(todo) )
        .catch ( error =>  {
            if( error instanceof PrismaClientKnownRequestError)
                return ErrorSpecific.ErrorDB( error );
            return res.status(404).json({ error })}
        );
    }
}