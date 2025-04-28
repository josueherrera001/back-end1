export class ContactEntity{
    constructor(
        public id: number,
        public readonly fullName: string,
        public readonly email: string,
        public readonly phone: string,
        public readonly description?: string,
        public completedAt?:Date | null
    ){}

    get isCompleted(){
        return !!this.completedAt;
    }

    public static fromObject (object:{[key: string]:any}){
        const {id, fullName,email,phone,description, completedAt } = object;

        if ( !id ) throw 'El id es requrido';
        if( !fullName ) throw 'Debe ingresar el nombre completo';
        if( !email ) throw 'Debe ingresar el correo electronico';
        if( !phone ) throw 'Debe ingresar el numero de telefono';

        let newCompletedAt;
        if( completedAt ){
            newCompletedAt = new Date( completedAt );
            if ( isNaN( newCompletedAt.getTime() )) throw 'La fecha no es valida';
        }

        return new ContactEntity( id, fullName,email,phone,description, completedAt);
    }
}