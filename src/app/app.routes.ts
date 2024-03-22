import { Routes } from '@angular/router';
import { ClientsListComponent } from './admin/clients-list/clients-list.component';
import { WorkersListComponent } from './admin/workers-list/workers-list.component';
import { ClientComponent } from './admin/client/client.component';
import { WorkerComponent } from './admin/worker/worker.component';
import { ServiceOrdersListComponent } from './admin/service-orders-list/service-orders-list.component';
import { ServiceOrderComponent } from './admin/service-order/service-order.component';
import { CalendarComponent } from './admin/calendar/calendar.component';
import { LoginComponent } from './public/login/login.component';
import { SobreComponent } from './admin/sobre/sobre.component';

export const routes: Routes = [
    // {path: '**', redirectTo: 'clients'},
    {path: 'clients', component: ClientsListComponent},
    {path: 'clients/:id', component: ClientComponent},
    {path: 'workers', component: WorkersListComponent},
    {path: 'workers/:id', component: WorkerComponent},
    {path: 'service_orders', component: ServiceOrdersListComponent},
    {path: 'service_orders/:id', component: ServiceOrderComponent},
    {path: 'calendar', component: CalendarComponent},
    {path: 'login', component: LoginComponent},
    {path: 'sobre', component: SobreComponent}
];
