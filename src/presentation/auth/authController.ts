import { Request, Response } from "express";
import { AuthRepository, UpdateAuthDto} from "../../domain";
import { Login } from "../../domain/use-case/auth/login-user";
import { ValidateEmail } from "../../domain/use-case/auth/validate-email";
import { ChangePassword } from "../../domain/use-case/auth/update.password";


export class AuthController{

    //** DI */
    constructor(
        private readonly Repository: AuthRepository
    ){}

    public login = (req:Request, res:Response) =>{
        const{ UserName, UserPass:Password} = req.body;
        new Login( this.Repository )
        .execute({ UserName, Password})
        .then( todos => res.json( todos ))
        .catch ( error => res.status(404).json({ error }));
    }

    public validateEmail = (req:Request, res:Response) =>{
        const token = req.params.token;
        new ValidateEmail( this.Repository )
        .execute( token )
        .then( todo => res.json(todo) )
        .catch ( error => res.status(404).json({ error }));
    }

    public ChangePassword = (req:Request, res:Response) =>{
        const [error, Dto] = UpdateAuthDto.update(req.body);
        if ( error ) return res.status(400).json(error);

       new ChangePassword( this.Repository )
       .execute( Dto! )
       .then( todo => res.json(todo) )
       .catch ( error => res.status(404).json({ error }));
    }
}