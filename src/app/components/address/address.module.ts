import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule, MatCardModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { AddressTableComponent } from './address-table/address-table.component';

@NgModule({
  declarations: [
    AddressTableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatPaginatorModule,
    MatSortModule
  ],
  exports: [
    AddressTableComponent
  ]
})
export class AddressModule { }
