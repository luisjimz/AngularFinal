import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Address } from '../shared/entities/Address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  addressList : Address[] = [{
    id: 1,
    street: "Avenida del Iman #580",
    city: "Mexico City",    
    state: "Mexico",
    zip: 50102,
    creationDate: new Date()
  }, 
  {
    id: 2,
    street: "Avenida Francisco Sosa #48",
    city: "Mexico City",    
    state: "Mexico",
    zip: 102933,
    creationDate: new Date()
  }];

  saveAddress(address : FormGroup){
    var temp = new Address();    
    temp.id = this.setId();
    temp.street = address.value.address.street;
    temp.city = address.value.address.city;
    temp.state = address.value.address.state;
    temp.zip = address.value.address.zip;
    temp.creationDate = new Date();
    this.addressList.push(temp);
    console.log(this.addressList)
  }

  getAddresses(): Address[]{
    return this.addressList;
  }

  findAddress(id): Address{
    console.log(id);
    for(var i = 0; i < this.addressList.length; i++){
      if(this.addressList[i].id == id){
        return this.addressList[i];
      }
    }
  }

  getTableHeader() : string[]{
    let foo = new Address();
    let headers = Object.getOwnPropertyNames(foo);
    return headers;
  }

  getAdressesToString(): string[]{
    var addresses : string[] = [];
    for(var i = 0; i < this.addressList.length; i++ ){
      let temporal : Address;
      temporal = this.addressList[i];
      addresses.push(temporal.street + " " + temporal.city + ", " + temporal.state + " " + temporal.zip)
    }    
    return addresses;
  }

  setId() : number{    
    if(this.addressList.length == 0){
      return 1;
    }else{
      return this.addressList[this.addressList.length-1].id + 1; 
    }
  }
  constructor() { }
}
