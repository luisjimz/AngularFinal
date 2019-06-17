import { iDatabaseObject } from "../../shared/entities/IDatabaseObject";
import { Address } from 'cluster';

interface ICliente extends iDatabaseObject{
    id : number,
    name : string,
    lastName : string,
    email : string,
    dni : number,
    birthDate : Date,
    phone : number,
    address : Address
}
