import { Request, Response } from "express";  
import { CreateSupplierDto, UpdateSupplierDto } from "../../domain/dtos/index";  
import { SupplierRepository, GetSuppliers, GetSupplier, CreateSupplier, UpdateSupplier, DeleteSupplier } from '../../domain';  
  
export class SupplierController{  
  
    //** DI */  
    constructor(  
        private readonly Repository: SupplierRepository  
    ){}  
  
    public getSuppliers = (req:Request, res:Response) =>{  
        new GetSuppliers( this.Repository )  
        .execute()  
        .then( todos => res.json( todos ))  
        .catch ( error => res.status(404).json({ error }));  
    }  
  
    public get = (req:Request, res:Response) =>{  
        const id = req.params.id;  
        new GetSupplier( this.Repository )  
        .execute( id )  
        .then( todo => res.json(todo) )  
        .catch ( error => res.status(404).json({ error }));  
    }  
  
    public post = (req:Request, res:Response) =>{  
        const [error, Dto] = CreateSupplierDto.create(req.body);  
        if ( error ) return res.status(400).json(error);  
  
       new CreateSupplier( this.Repository )  
       .execute( Dto! )  
       .then( todo => res.json(todo) )  
       .catch ( error => res.status(404).json({ error }));  
    }  
  
    public put = (req:Request, res:Response) =>{  
        const id = +req.params.id;  
  
        const [error, Dto] = UpdateSupplierDto.update({...req.body, id});  
        if ( error ) return res.status(400).json(error);  
       
        new UpdateSupplier( this.Repository )  
        .execute( Dto! )  
        .then( todo => res.json(todo) )  
        .catch ( error => res.status(404).json({ error }));  
    }  
  
    public delete = (req:Request, res:Response) =>{  
        const id = req.params.id;  
       
        new DeleteSupplier( this.Repository )  
        .execute( id! )  
        .then( todo => res.json(todo) )  
        .catch ( error => res.status(404).json({ error }));  
    }  
}