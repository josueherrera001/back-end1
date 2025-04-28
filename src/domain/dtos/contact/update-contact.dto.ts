

export class UpdateContactDto {
    constructor(
        public readonly id: string,
        public readonly fullName: string,
        public readonly email: string,
        public readonly phone: string,
        public readonly description?: string,
        public readonly completedAt?: Date
    ){}

    get values(){
        const returnObj: {[key:string]: any } = {};

        if ( this.fullName ) returnObj.fullName = this.fullName;
        if ( this.email ) returnObj.email = this.email;
        if ( this.phone ) returnObj.phone = this.phone;
        if ( this.completedAt ) returnObj.completedAt = this.completedAt;

        return returnObj;
    }

    static create(props:{[key:string]:any}):[string?, UpdateContactDto?]{
        const { id, fullName,email,phone,description, completedAt } = props;
        let newCompletedAt = completedAt;

        if ( !id || isNaN(Number(id))){
            return ['El codigo de identificacion no es valido', undefined];
        }
        if( completedAt){
            newCompletedAt = new Date( completedAt );
            if ( newCompletedAt.toString() === 'Invalid Date' ){
                return ['La fecha no es valida. Debe ingresar una fecha valida', undefined];
            }
        }
        if( !fullName ) return ['Debe ingresar el nombre completo', undefined]
        if( !email ) return ['Debe ingresar el correo electronico', undefined]
        if( !phone ) return ['Debe ingresar el numero de telefono', undefined]

        return [undefined, new UpdateContactDto( id, fullName,email,phone,description, newCompletedAt)];
    }
}