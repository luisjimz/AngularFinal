import { iDatabaseObject } from './IDatabaseObject';

interface IAddress extends iDatabaseObject{
    id : number,
    street : string,
    city : string,
    state : string,
    zip : number,
    creationDate : Date;
}

export class Address implements IAddress{
    id: number;
    street: string = '';    
    city: string = '';
    state: string = '';
    zip: number = 0;
    creationDate: Date = new Date();
}