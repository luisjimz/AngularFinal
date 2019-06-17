import { iDatabaseObject } from '../../shared/entities/IDatabaseObject';

interface IAddress extends iDatabaseObject{
    street : string,
    city : string,
    state : string,
    zip : number
}

export class Address implements IAddress{
    id: number;
    street: string = '';    
    city: string = '';
    state: string = '';
    zip: number = 0;
}