import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { ClientesFormComponent } from './components/clientes/clientes-form/clientes-form.component';
import { ClientesTableComponent } from './components/clientes/clientes-table/clientes-table.component';


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'client-register', component: ClientesFormComponent },    
    { path: 'client-inmemory', component: ClientesTableComponent },
    
    { path: 'edit/:id', component: ClientesFormComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);