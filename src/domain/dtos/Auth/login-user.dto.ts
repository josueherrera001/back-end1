export class LoginUserDto{
    private constructor(
        public UserName: string,
        public Password: string,
    ){}

    static login( object:{ [ key:string ]:string }) : [ string?, LoginUserDto?] {
        const{ UserName, Password } = object;
      
        if ( !UserName ) return ['Ingresa el nombre del usuario', undefined];
        if ( !Password ) return ['Ingresa la contraseña', undefined];
        
        return [undefined, new LoginUserDto(UserName, Password)]
    }
}