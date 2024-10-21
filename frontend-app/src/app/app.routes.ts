import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: 'home', loadComponent: () => import("./home/home.component").then((m) => m.HomeComponent) },
    { path: 'films', loadComponent: () => import("./films/films-list/films-list.component").then((m) => m.FilmsListComponent) },
    { path: 'films/:id', loadComponent: () => import("./films/film-detail/film-detail.component").then((m) => m.FilmDetailComponent) },
    { path: 'characters', loadComponent: () => import("./characters/character-list/character-list.component").then((m) => m.CharacterListComponent) },
    { path: 'characters/:id', loadComponent: () => import("./characters/character-detail/character-detail.component").then((m) => m.CharacterDetailComponent) },
    /* { path: 'planets', loadComponent: () => import("./planets/planets-list/planets-list.component").then((m) => m.PlanetListComponent) },
    { path: 'planets/:id', loadComponent: () => import("./planets/planets-detail/planet-detail.component").then((m) => m.PlanetDetailComponent) }, */
];
