import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: 'home', loadComponent: () => import("./home/home.component").then((m) => m.HomeComponent) },
    { path: 'films', loadComponent: () => import("./films/films-list/films-list.component").then((m) => m.FilmsListComponent) },
    { path: 'films/:id', loadComponent: () => import("./films/film-detail/film-detail.component").then((m) => m.FilmDetailComponent) },
];
