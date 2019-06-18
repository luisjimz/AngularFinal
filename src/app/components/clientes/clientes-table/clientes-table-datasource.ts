import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { ClientesService } from '../clientes.service';

export interface ClientesTableItem {
  id: number;
  name: string;
  lastName: string;
  email: string;
  dni: string;
  birthDate: Date;
  phone: number;
  age: number;
  creationDate: Date;
}

export class ClientesTableDataSource extends DataSource<ClientesTableItem> {
  data: ClientesTableItem[] = this.clienteService.getClientes();
  paginator: MatPaginator;
  sort: MatSort;

  constructor(
    private clienteService: ClientesService
  ) {
    super();
  }

  connect(): Observable<ClientesTableItem[]> {
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  disconnect() { }

  private getPagedData(data: ClientesTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  private getSortedData(data: ClientesTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        case 'lastName': return compare(a.lastName, b.lastName, isAsc);
        case 'birthDate': return compare(a.birthDate, b.birthDate, isAsc);
        case 'dni': return compare(a.dni, b.dni, isAsc);
        case 'age': return compare(a.age, b.age, isAsc);
        case 'creationDate': return compare(a.creationDate, b.creationDate, isAsc);
        default: return 0;
      }
    });
  }
}

function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
