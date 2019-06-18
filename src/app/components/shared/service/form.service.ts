import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ClientesService } from '../../clientes/clientes.service';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  

  saveForm(form : FormGroup){    
    
    this.clienteService.saveCliente(form);      
  }

  constructor(

    private clienteService : ClientesService
    ) { }
}
