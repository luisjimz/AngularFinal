import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'final-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.scss']
})
export class ClientesFormComponent implements OnInit {

  clienteForm : FormGroup;

  constructor(
    private fb:FormBuilder
    ) { }

  ngOnInit() {
    this.clienteForm = this.fb.group({
      name : ['', 
        Validators.required, 
        Validators.pattern('[a-zA-Z ]*')],
      lastName: ['', 
        Validators.required, 
        Validators.pattern('[a-zA-Z ]*')],
      email: ['', 
        Validators.required, 
        Validators.email],
      dni: ['', 
        Validators.required, 
        Validators.pattern('^(0|[1-9][0-9]*)$'),
        Validators.min(10),
        Validators.max(10)
      ],
      birthDate: ['', Validators.required],
      phone: ['',
        Validators.required, 
        Validators.pattern('^(0|[1-9][0-9]*)$')
      ],
      address: ['',Validators.required]
    })
  }
}
