import { Request, Response } from "express";
import { CreatePresentationDto,  UpdatePresentationDto } from "../../domain/dtos/index";
import { PresentationRepository, GetPresentations, GetPresentation, CreatePresentation, UpdatePresentation, DeletePresentation } from '../../domain';


export class PresentationController{

    //** DI */
    constructor(
        private readonly Repository: PresentationRepository
    ){}

    public getPresentations = (req:Request, res:Response) =>{
        new GetPresentations( this.Repository )
        .execute()
        .then( todos => res.json( todos ))
        .catch ( error => res.status(404).json({ error }));
    }

    public get = (req:Request, res:Response) =>{
        const id = req.params.id;
        new GetPresentation( this.Repository )
        .execute( id )
        .then( todo => res.json(todo) )
        .catch ( error => res.status(404).json({ error }));
    }

    public post = (req:Request, res:Response) =>{
        const [error, Dto] = CreatePresentationDto.create(req.body);
        if ( error ) return res.status(400).json(error);

       new CreatePresentation( this.Repository )
       .execute( Dto! )
       .then( todo => res.json(todo) )
       .catch ( error => res.status(404).json({ error }));
    }

    public put = (req:Request, res:Response) =>{

        const id = +req.params.id;

        const [error, Dto] = UpdatePresentationDto.update({...req.body, id});
        if ( error ) return res.status(400).json(error);
     
        new UpdatePresentation( this.Repository )
        .execute( Dto! )
        .then( todo => res.json(todo) )
        .catch ( error => res.status(404).json({ error }));
    }

    public delete = (req:Request, res:Response) =>{
        const id = req.params.id;
     
        new DeletePresentation( this.Repository )
        .execute( id! )
        .then( todo => res.json(todo) )
        .catch ( error => res.status(404).json({ error }));
    }
}