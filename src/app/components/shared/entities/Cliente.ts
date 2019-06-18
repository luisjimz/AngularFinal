import { iDatabaseObject } from "./IDatabaseObject";

interface ICliente extends iDatabaseObject {
    id: number,
    name: string,
    lastName: string,
    email: string,
    dni: string,
    birthDate: Date,
    phone: number,
    age: number
}

export class Cliente implements ICliente {
    id: number = 0;
    name: string = '';
    lastName: string = '';
    email: string = '';
    dni: string = '';
    birthDate: Date = new Date();
    phone: number = 0;
    age: number = 0;
    creationDate: Date = new Date();
}