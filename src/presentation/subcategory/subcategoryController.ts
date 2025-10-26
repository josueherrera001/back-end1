import { Request, Response } from "express";
import { CreateSubCategoryDto, UpdateSubCategoryDto } from "../../domain/dtos/index";
import { SubCategoryRepository, GetSubCategories, GetSubCategory, CreateSubCategory, UpdateSubCategory, DeleteSubCategory } from '../../domain';
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { ErrorSpecific } from "../../helpers";


export class SubCategoryController{

    //** DI */
    constructor(
        private readonly Repository: SubCategoryRepository
    ){}

    public getSubCategories = (req:Request, res:Response) =>{
        const id = req.params.id;
        new GetSubCategories( this.Repository )
        .execute(id)
        .then( todos => res.json( todos ))
        .catch ( error =>  {
            if( error instanceof PrismaClientKnownRequestError)
                return ErrorSpecific.ErrorDB( error );
            return res.status(404).json({ error })}
        );
    }

    public get = (req:Request, res:Response) =>{
        const id = req.params.id;
        new GetSubCategory( this.Repository )
        .execute( id )
        .then( todo => res.json(todo) )
        .catch ( error =>  {
            if( error instanceof PrismaClientKnownRequestError)
                return ErrorSpecific.ErrorDB( error );
            return res.status(404).json({ error })}
        );
    }

    public post = (req:Request, res:Response) =>{
        const [error, Dto] = CreateSubCategoryDto.create(req.body);
        if ( error ) return res.status(400).json(error);

       new CreateSubCategory( this.Repository )
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

        const [error, Dto] = UpdateSubCategoryDto.update({...req.body, id});
        if ( error ) return res.status(400).json(error);
     
        new UpdateSubCategory( this.Repository )
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
     
        new DeleteSubCategory( this.Repository )
        .execute( id! )
        .then( todo => res.json(todo) )
        .catch ( error =>  {
            if( error instanceof PrismaClientKnownRequestError)
                return ErrorSpecific.ErrorDB( error );
            return res.status(404).json({ error })}
        );
    }
}