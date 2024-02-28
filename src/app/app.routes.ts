import { Routes } from '@angular/router';
import { GraphicsComponent } from './admin/graphics/graphics.component';
import { ClientsListComponent } from './admin/clients-list/clients-list.component';
import { ClientComponent } from './admin/client/client.component';
import { WorkersListComponent } from './admin/workers-list/workers-list.component';
import { WorkerComponent } from './admin/worker/worker.component';

export const routes: Routes = [
    {path: "graphics", component: GraphicsComponent},
    {path: "clients", component: ClientsListComponent},
    {path: "clients/:uuid", component: ClientComponent},
    {path: "workers", component: WorkersListComponent},
    {path: "workers/:uuid", component: WorkerComponent},
    {path: "**", redirectTo: "graphics"}
];
