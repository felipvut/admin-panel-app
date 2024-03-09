import { Routes } from '@angular/router';
import { ClientsListComponent } from './admin/clients-list/clients-list.component';
import { WorkersListComponent } from './admin/workers-list/workers-list.component';
import { ClientComponent } from './admin/client/client.component';
import { WorkerComponent } from './admin/worker/worker.component';

export const routes: Routes = [
    // {path: '**', redirectTo: 'clients'},
    {path: 'clients', component: ClientsListComponent},
    {path: 'clients/:uuid', component: ClientComponent},
    {path: 'workers', component: WorkersListComponent},
    {path: 'workers/:uuid', component: WorkerComponent}
];
