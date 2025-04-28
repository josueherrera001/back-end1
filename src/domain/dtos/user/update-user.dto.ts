export class UpdateUserDto{
    constructor(
        public readonly Id: string,
        public readonly FirstName: string,
        public readonly LastName: string,
        public readonly Phone: string
    ){}

    get Values(){
        const returnObj:{[key: string]:any} ={};

        if ( this.FirstName )  returnObj.FirstName = this.FirstName;
        if ( this.LastName )  returnObj.LastName = this.LastName;
        if ( this.Phone )  returnObj.Phone = this.Phone;

        return returnObj;
    }

    static update(props:{[key:string]:any}):[string?,UpdateUserDto?]{
        const{id:Id,FirstName, LastName, Address, Phone } = props;
        if ( !Id ) return ['Debe seleccionar el usuario a modificar',undefined];
        if ( !FirstName ) return ['Debe ingresar el nombre de la persona',undefined];
        if ( !LastName ) return ['Debe ingresar el apellido de la persona',undefined];
        if ( !Phone ) return ['Debe ingresar el telefono'];

        return [undefined, new UpdateUserDto(Id,FirstName, LastName, Phone )]
    }
}