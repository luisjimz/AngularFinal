import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesFormComponent } from './clientes-form/clientes-form.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, MatGridListModule, MatExpansionModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ClientesTableComponent } from './clientes-table/clientes-table.component';


@NgModule({
  declarations: [
    ClientesFormComponent,
    ClientesTableComponent,
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    BrowserAnimationsModule,
    RouterModule,
    MatGridListModule,
    MatExpansionModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule

  ],
  exports: [
    ClientesFormComponent,
    ClientesTableComponent
  ]
})
export class ClientesModule { }
