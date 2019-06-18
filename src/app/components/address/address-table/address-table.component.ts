import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTable } from '@angular/material';
import { AddressTableDataSource, AddressTableItem } from './address-table-datasource';
import { AddressService } from '../address.service';

@Component({
  selector: 'final-address-table',
  templateUrl: './address-table.component.html',
  styleUrls: ['./address-table.component.scss']
})
export class AddressTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatTable, { static: false }) table: MatTable<AddressTableItem>;
  dataSource: AddressTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns: string[];

  ngOnInit() {
    this.dataSource = new AddressTableDataSource(this.addressService);
    this.displayedColumns = this.addressService.getTableHeader();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  constructor(private addressService: AddressService) {

  }
}
