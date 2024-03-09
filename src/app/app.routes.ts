import { Routes } from '@angular/router';
import { ClientsListComponent } from './admin/clients-list/clients-list.component';
import { WorkersListComponent } from './admin/workers-list/workers-list.component';

export const routes: Routes = [
    // {path: '**', redirectTo: 'clients'},
    {path: 'clients', component: ClientsListComponent},
    {path: 'workers', component: WorkersListComponent}
];
