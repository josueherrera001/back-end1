export class ContactEntity{
    constructor(
        public id: number,
        public readonly fullName: string,
        public readonly email: string,
        public readonly phone: string,
        public readonly description?: string,
    ){}

    public static fromObject (object:{[key: string]:any}){
        const {id, fullName,email,phone,description } = object;

        return new ContactEntity( id, fullName,email,phone,description);
    }
}