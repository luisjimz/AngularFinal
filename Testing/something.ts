interface IPersona{
    name : string,
    lastName : string,
    age : number,
    email : string
}

export class Persona implements IPersona{
    id: number = 0;
    name: string = '';    
    lastName: string = '';
    age: number = 0;
    email: string = '';        
}

let foo : Persona = new Persona();
console.log(foo);

