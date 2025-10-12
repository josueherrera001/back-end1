import jwt from 'jsonwebtoken';
import { envs } from './envs';

export class JwtAdapter{
    static async generateToken(payload: any,/*duration:any = '2h'*/ duration:any = '100d'){
       
        return new Promise<string>( (resolve) =>{
            jwt.sign(payload, envs.JWT_SEED,{
                expiresIn: duration
            },( err, token ) =>{
                if ( err ) return resolve( '' );
                resolve( token! );
            });
        });
    }

    static validateToken( token: string){
        return new Promise( ( resolve ) =>{
            jwt.verify( token, envs.JWT_SEED, (err, decoded ) =>{
                if ( err ) return resolve( null );
                resolve( decoded );
            });
        });
    }
}