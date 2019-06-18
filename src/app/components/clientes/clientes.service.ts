import { Injectable } from "@angular/core";
import { Cliente } from '../shared/entities/cliente';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class ClientesService {

  clienteList: Cliente[] = [{
    creationDate: new Date(),
    id: 1,
    name: "Luis",
    lastName: "Jimenez",
    email: "luisjimz@gmail.com",
    dni: '111333555777',
    birthDate: new Date(),
    phone: 8333248978,
    age: 20
  },
  {
    creationDate: new Date(),
    id: 2,
    name: "Juan",
    lastName: "Ramon",
    email: "ramonaguilar@gmail.com",
    dni: '111111111111',
    birthDate: new Date(),
    phone: 8182341232,
    age: 25
  }];

  extraHeader: string[] = [
    "address"
  ]

  saveCliente(cliente: FormGroup) {
    var temp = new Cliente();
    temp.id = this.setId();
    temp.name = cliente.value.name;
    temp.lastName = cliente.value.lastName;
    temp.email = cliente.value.email;
    temp.dni = this.getDni();
    temp.birthDate = cliente.value.birthDate;
    temp.phone = cliente.value.phone;
    temp.age = this.calculateAge(temp.birthDate);
    this.clienteList.push(temp);
  }

  getClientes(): Cliente[] {    
    return this.clienteList;
  }

  getDni(): string {
    var dni = this.calculateDni();
    if (this.checkDuplicateDni(dni) == false) {
      this.getDni();
    }
    else {
      return dni;
    }
  }

  calculateDni(): string {
    var dniArr: number[] = [];
    var dni: string;
    for (let i = 0; i < 12; i++) {
      dniArr.push(Math.floor((Math.random() * 9) + 1));
    }
    return dni = dniArr.map(String).join('');
  }

  private checkDuplicateDni(dni: string) {
    for (var i = 0; i < this.clienteList.length; i++) {
      if (this.clienteList[i].dni == dni) {
        return false;
      }
    }    
  }

  findCliente(id): Cliente {
    for (var i = 0; i < this.clienteList.length; i++) {
      if (this.clienteList[i].id == id) {
        return this.clienteList[i];
      }
    }
  }

  calculateAge(date: Date): number {
    return new Date().getFullYear() - date.getFullYear();
  }

  getTableHeader(): string[] {
    let foo = new Cliente();
    let headers = Object.getOwnPropertyNames(foo);
    // headers.push(this.extraHeader[0]);
    headers.push("edit");
    return headers;
  }

  setId(): number {
    if (this.clienteList.length == 0) {
      return 1;
    } else {
      return this.clienteList[this.clienteList.length - 1].id + 1;
    }
  }
  constructor() {
  }
}