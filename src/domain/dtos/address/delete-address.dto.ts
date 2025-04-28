export class DeleteAddressDto{
    constructor(
        public readonly Id: string
    ){}

    get Values(){
        const returnObj:{[key: string]:any} ={};

        if ( this.Id )  returnObj.Id = this.Id;

        return returnObj;
    }

    static delete(props:{[key:string]:any}):[string?,DeleteAddressDto?]{
        const{ Id } = props;

        if ( !Id ) return ['Debe seleccionar el telefono que desee eliminar',undefined];

        return [undefined, new DeleteAddressDto(Id)]
    }
}