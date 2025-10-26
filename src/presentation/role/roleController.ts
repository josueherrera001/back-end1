import { Request, Response } from "express";
import { CreateRoleDto,  UpdateRoleDto } from "../../domain/dtos/index";
import { RoleRepository, GetRoles, GetRole, CreateRole, UpdateRole, DeleteRole } from '../../domain';
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { ErrorSpecific } from "../../helpers";


export class RoleController{

    //** DI */
    constructor(
        private readonly Repository: RoleRepository
    ){}

    public getRoles = (req:Request, res:Response) =>{
        new GetRoles( this.Repository )
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
        new GetRole( this.Repository )
        .execute( id )
        .then( todo => res.json(todo) )
        .catch ( error =>  {
            if( error instanceof PrismaClientKnownRequestError)
                return ErrorSpecific.ErrorDB( error );
            return res.status(404).json({ error })}
        );
    }

    public post = (req:Request, res:Response) =>{
        const [error, Dto] = CreateRoleDto.create(req.body);
        if ( error ) return res.status(400).json(error);

       new CreateRole( this.Repository )
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

        const [error, Dto] = UpdateRoleDto.update({...req.body, id});
        if ( error ) return res.status(400).json(error);
     
        new UpdateRole( this.Repository )
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
     
        new DeleteRole( this.Repository )
        .execute( id! )
        .then( todo => res.json(todo) )
        .catch ( error =>   {
            if( error instanceof PrismaClientKnownRequestError)
                return ErrorSpecific.ErrorDB( error );
            return res.status(404).json({ error })}
        );
    }
}