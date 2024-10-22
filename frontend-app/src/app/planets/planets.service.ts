import { Injectable } from '@angular/core';
import { baseURL } from '../environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPlanet } from './planet';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  constructor(private http: HttpClient) { }

  private planetUrl = baseURL + "planets/";


  // get all films
  public getAllPlanets(): Observable<{ results: IPlanet[] }> {
    return this.http.get<{ results: IPlanet[] }>(this.planetUrl);
  }

  // get a single planet
  public getSinglePlanet(planetsUrl: string): Observable<IPlanet> {
    return this.http.get<IPlanet>(planetsUrl);
  }

  // get a planet by ID
  public getPlanetById(id: string): Observable<IPlanet> {
    const url = `${this.planetUrl}${id}`;
    return this.http.get<IPlanet>(url);
  }



}
