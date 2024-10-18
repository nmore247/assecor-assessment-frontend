import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: 'home', loadComponent: () => import("./home/home.component").then((m) => m.HomeComponent) }
];
