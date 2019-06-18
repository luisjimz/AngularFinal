import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormService } from '../../shared/service/form.service';
import { zipValidator } from '../../shared/validators/zipValidator';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientesService } from '../clientes.service';
import { AddressService } from '../../address/address.service';

@Component({
  selector: 'final-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.scss']
})
export class ClientesFormComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private formService: FormService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private clientesService: ClientesService,
    private addresService: AddressService
  ) {

  }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.minLength(4),
        Validators.pattern('[a-zA-Z ]*')]
      ],
      lastName: ['', [
        Validators.required,
        Validators.minLength(4),
        Validators.pattern('[a-zA-Z ]*')]
      ],
      email: ['', [
        Validators.required,
        Validators.email]
      ],
      // dni: ['', [
      //   Validators.required,
      //   Validators.minLength(12),
      //   Validators.maxLength(12),
      //   Validators.pattern('^(0|[1-9][0-9]*)$')
      //   ]
      // ],
      birthDate: ['', Validators.required],
      phone: ['', [
        Validators.required,
        Validators.pattern('^(0|[1-9][0-9]*)$')]
      ],
      address: this.fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        zip: ['', [
          Validators.required,
          zipValidator]
        ]
      })
    });
    this.activatedRoute.params.subscribe(Response => {
      let id = Response["id"];
      if (id != undefined) {
        var cliente = this.clientesService.findCliente(id);
        var address = this.addresService.findAddress(id);
        this.form = this.fb.group({
          name: [cliente.name, [
            Validators.required,
            Validators.minLength(4),
            Validators.pattern('[a-zA-Z ]*')]
          ],
          lastName: [cliente.lastName, [
            Validators.required,
            Validators.minLength(4),
            Validators.pattern('[a-zA-Z ]*')]
          ],
          email: [cliente.email, [
            Validators.required,
            Validators.email]
          ],
          birthDate: [cliente.birthDate, Validators.required],
          phone: [cliente.phone, [
            Validators.required,
            Validators.pattern('^(0|[1-9][0-9]*)$')]
          ],
          address: this.fb.group({
            street: [address.street, Validators.required],
            city: [address.city, Validators.required],
            state: [address.state, Validators.required],
            zip: [address.zip, [
              Validators.required,
              zipValidator]
            ]
          })
        })
      }
    })
  }

  onSubmit(): void {
    this.formService.saveForm(this.form);
    //Alguna validacion para saber si se guardo correctamente 
    this.router.navigate(['/client-inmemory']);
  }

}
