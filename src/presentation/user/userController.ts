import { Request, Response } from "express";
import { UserRepository } from "../../domain/repositories/user-repository";
import { CreateUserDto } from "../../domain/dtos/user/create-user.dto";
import { CreateUser, DeleteUser, GetUser, GetUsers, UpdateUser, UpdateUserDto } from "../../domain";


export class UserController{

    //** DI */
    constructor(
        private readonly Repository: UserRepository
    ){}

    public getUsers = (req:Request, res:Response) =>{
        new GetUsers( this.Repository )
        .execute()
        .then( todos => res.json( todos ))
        .catch ( error => res.status(404).json({ error }));
    }

    public get = (req:Request, res:Response) =>{
        const id = req.params.id;
        new GetUser( this.Repository )
        .execute( id )
        .then( todo => res.json(todo) )
        .catch ( error => res.status(404).json({ error }));
    }

    public post = (req:Request, res:Response) =>{
        
    const [error, createuserDto] = CreateUserDto.create(req.body);
        if ( error ) return res.status(400).json(error);

       new CreateUser( this.Repository )
       .execute( createuserDto!,createuserDto?.auth! )
       .then( todo => res.json(todo) )
       .catch ( error => res.status(404).json({ error }));
    }

    public put = (req:Request, res:Response) =>{

        const Id = req.params.id;

        const [error, updateTodoDto] = UpdateUserDto.update({...req.body, Id});
        if ( error ) return res.status(400).json(error);
     
        new UpdateUser( this.Repository )
        .execute( updateTodoDto! )
        .then( todo => res.json(todo) )
        .catch ( error => res.status(404).json({ error }));
    }

    public delete = (req:Request, res:Response) =>{
        const id = req.params.id;
     
        new DeleteUser( this.Repository )
        .execute( id! )
        .then( todo => res.json(todo) )
        .catch ( error => res.status(404).json({ error }));
    }
}