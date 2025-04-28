import { Request, Response } from "express";
import { CreateContactDto,UpdateContactDto } from "../../domain/dtos/index";
import { CreateContact, DeleteContact, GetContact, GetContacts, ContactRepository, UpdateContact } from '../../domain';


export class ContactController{

    //** DI */
    constructor(
        private readonly contactRepository: ContactRepository
    ){}

    public getContacts = (req:Request, res:Response) =>{
        new GetContacts( this.contactRepository )
        .execute()
        .then( todos => res.json( todos ))
        .catch ( error => res.status(404).json({ error }));
    }

    public get = (req:Request, res:Response) =>{
        const id = req.params.id;
        new GetContact( this.contactRepository )
        .execute( id )
        .then( todo => res.json(todo) )
        .catch ( error => res.status(404).json({ error }));
    }

    public post = (req:Request, res:Response) =>{
        const [error, createContactDto] = CreateContactDto.create(req.body);
        if ( error ) return res.status(400).json(error);

       new CreateContact( this.contactRepository )
       .execute( createContactDto! )
       .then( todo => res.json(todo) )
       .catch ( error => res.status(404).json({ error }));
    }

    public put = (req:Request, res:Response) =>{

        const id = +req.params.id;

        const [error, updateTodoDto] = UpdateContactDto.create({...req.body, id});
        if ( error ) return res.status(400).json(error);
     
        new UpdateContact( this.contactRepository )
        .execute( updateTodoDto! )
        .then( todo => res.json(todo) )
        .catch ( error => res.status(404).json({ error }));
    }

    public delete = (req:Request, res:Response) =>{
        const id = req.params.id;
     
        new DeleteContact( this.contactRepository )
        .execute( id! )
        .then( todo => res.json(todo) )
        .catch ( error => res.status(404).json({ error }));
    }
}