import { Routes } from '@angular/router';
import { GraphicsComponent } from './admin/graphics/graphics.component';

export const routes: Routes = [
    {path: "graphics", component: GraphicsComponent},
    {path: "**", redirectTo: "graphics"}
];
