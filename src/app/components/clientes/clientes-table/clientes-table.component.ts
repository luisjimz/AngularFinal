import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTable } from '@angular/material';
import { ClientesTableDataSource, ClientesTableItem } from './clientes-table-datasource';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'final-clientes-table',
  templateUrl: './clientes-table.component.html',
  styleUrls: ['./clientes-table.component.scss']
})
export class ClientesTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<ClientesTableItem>;
  dataSource: ClientesTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns : string[];
  

  ngOnInit() {
    this.dataSource = new ClientesTableDataSource(this.clientesService);
    this.displayedColumns = this.clientesService.getTableHeader();
    console.log(this.displayedColumns);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  constructor(private clientesService : ClientesService){
    
  }
}
