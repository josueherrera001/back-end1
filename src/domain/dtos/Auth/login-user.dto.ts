import { JsonObject } from "@prisma/client/runtime/library";
import { ErrorSpecific } from "../../../helpers";

export class LoginUserDto{
    private constructor(
        public UserName: string,
        public Password: string,
    ){}

    static login( object:{ [ key:string ]:string }) : [ JsonObject?, LoginUserDto?] {
        const{ UserName, Password } = object;
      
        if ( !UserName ) return [ErrorSpecific.ErrorEmpty('Ingresa el nombre del usuario'), undefined];
        if ( !Password ) return [ErrorSpecific.ErrorEmpty('Ingresa la contraseña'), undefined];
        
        return [undefined, new LoginUserDto(UserName, Password)]
    }
}