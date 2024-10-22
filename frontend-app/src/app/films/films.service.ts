import { Injectable } from '@angular/core';
import { baseURL } from '../environment';
import { HttpClient } from '@angular/common/http';
import { IFilm } from './film';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  private filmsUrl = baseURL + "films/";

  constructor(private http: HttpClient, private router: Router) { }

  // get all films
  public getAllFilms(): Observable<{ results: IFilm[] }> {
    return this.http.get<{ results: IFilm[] }>(this.filmsUrl);
  }

   // get a single film
   public getSingleFilm(filmsUrl :string): Observable<IFilm> {
    return this.http.get<IFilm>(filmsUrl);
  }

  // get a single film by ID
  public getFilmById(id: string): Observable<IFilm> {
    const url = `${this.filmsUrl}${id}`;
    return this.http.get<IFilm>(url);
  }

  public navigateToFilm(id: string) {
    this.router.navigate(['films', id]);
  }
  

}
