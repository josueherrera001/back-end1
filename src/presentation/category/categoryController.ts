import { Request, Response } from "express";
import { CreateCategoryDto, UpdateCategoryDto } from "../../domain/dtos/index";
import { CategoryRepository, GetCategories, GetCategory, CreateCategory, UpdateCategory, DeleteCategory } from '../../domain';
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { ErrorSpecific } from "../../helpers";


export class CategoryController{

    //** DI */
    constructor(
        private readonly Repository: CategoryRepository
    ){}

    public getCategories = (req:Request, res:Response) =>{
        new GetCategories( this.Repository )
        .execute()
        .then( todos => res.json( todos ))
        .catch ( error =>   {
            if( error instanceof PrismaClientKnownRequestError)
                return ErrorSpecific.ErrorDB( error );
            return res.status(404).json({ error })}
        );
    }

    public get = (req:Request, res:Response) =>{
        const id = req.params.id;
        new GetCategory( this.Repository )
        .execute( id )
        .then( todo => res.json(todo) )
        .catch ( error =>  {
            if( error instanceof PrismaClientKnownRequestError)
                return ErrorSpecific.ErrorDB( error );
            return res.status(404).json({ error })}
        );
    }

    public post = (req:Request, res:Response) =>{
        const [error, Dto] = CreateCategoryDto.create(req.body);
        if ( error ) return res.status(400).json(error);

       new CreateCategory( this.Repository )
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

        const [error, Dto] = UpdateCategoryDto.update({...req.body, id});
        if ( error ) return res.status(400).json(error);
     
        new UpdateCategory( this.Repository )
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
     
        new DeleteCategory( this.Repository )
        .execute( id! )
        .then( todo => res.json(todo) )
        .catch ( error =>  {
            if( error instanceof PrismaClientKnownRequestError)
                return ErrorSpecific.ErrorDB( error );
            return res.status(404).json({ error })}
        );
    }
}