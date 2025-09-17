import { Request, Response } from "express";
import { CreateSubMenuDto, UpdateSubMenuDto } from "../../domain/dtos/index";
import { SubMenuRepository, GetSubMenus, GetSubMenu, CreateSubMenu, UpdateSubMenu, DeleteSubMenu } from '../../domain';


export class SubMenuController{

    //** DI */
    constructor(
        private readonly Repository: SubMenuRepository
    ){}

    public getSubMenus = (req:Request, res:Response) =>{
        new GetSubMenus( this.Repository )
        .execute()
        .then( todos => res.json( todos ))
        .catch ( error => res.status(404).json({ error }));
    }

    public get = (req:Request, res:Response) =>{
        const id = req.params.id;
        new GetSubMenu( this.Repository )
        .execute( id )
        .then( todo => res.json(todo) )
        .catch ( error => res.status(404).json({ error }));
    }

    public post = (req:Request, res:Response) =>{
        const [error, Dto] = CreateSubMenuDto.create(req.body);
        if ( error ) return res.status(400).json(error);

       new CreateSubMenu( this.Repository )
       .execute( Dto! )
       .then( todo => res.json(todo) )
       .catch ( error => res.status(404).json({ error }));
    }

    public put = (req:Request, res:Response) =>{

        const id = +req.params.id;

        const [error, Dto] = UpdateSubMenuDto.update({...req.body, id});
        if ( error ) return res.status(400).json(error);
     
        new UpdateSubMenu( this.Repository )
        .execute( Dto! )
        .then( todo => res.json(todo) )
        .catch ( error => res.status(404).json({ error }));
    }

    public delete = (req:Request, res:Response) =>{
        const id = req.params.id;
     
        new DeleteSubMenu( this.Repository )
        .execute( id! )
        .then( todo => res.json(todo) )
        .catch ( error => res.status(404).json({ error }));
    }
}