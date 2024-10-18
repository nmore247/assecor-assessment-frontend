import { Injectable } from '@angular/core';
import { baseURL } from '../environment';
import { HttpClient } from '@angular/common/http';
import { IFilm } from './film';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FilmsListService {

  private baseUrl = baseURL;
  private filmsUrl = "films"

  constructor(private http: HttpClient) { }

  public getFilms(): Observable<{ results: IFilm[] }> {
    return this.http.get<{ results: IFilm[] }>(this.baseUrl + this.filmsUrl)
  }
}
