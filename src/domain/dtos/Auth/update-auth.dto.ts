import { bcryptAdapter } from "../../../config/bcrypt.adapter";

export class UpdateAuthDto{
    constructor(
        public readonly id: string,
        public readonly OldUserPass:string,
        public readonly ActiveUserPass:string,
        public readonly UserPass: string
    ){}

    get Values(){
        const returnObj:{[obj:string]:any} ={};
        if ( this.id )  returnObj.id = this.id;
        if ( this.OldUserPass )  returnObj.UserName = this.OldUserPass;
        if ( this.ActiveUserPass )  returnObj.UserName = this.ActiveUserPass;
        if ( this.UserPass )  returnObj.UserPass = this.UserPass;

        return returnObj;
    }

    static update(props:{[key:string]:any}):[string?, UpdateAuthDto?]{
        const{id,OldUserPass,ActiveUserPass, UserPass} = props;

        if ( id )   return ['Debe seleccionar el usuario a modificar',undefined]
        if ( OldUserPass )   return ['Debe debe ingresar la actual contraseña',undefined]
        const isMatching = bcryptAdapter.compare(OldUserPass, ActiveUserPass);
        
        if ( isMatching )  return ['La contraseña actual no es correcto',undefined];
        if ( UserPass )  return ['Debe ingresar la nueva contraseña del usuario',undefined];
        if ( UserPass < 8 && UserPass > 20 )  return ['La contraseña nueva debe contener como minimo 8 y maximo 20 caracteres',undefined];
        

        return [undefined, new UpdateAuthDto(id,OldUserPass,ActiveUserPass, UserPass)]
    }
}