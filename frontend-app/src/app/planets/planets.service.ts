import { Injectable } from '@angular/core';
import { baseURL } from '../environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPlanet } from './planet';



@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  private planetsUrl = baseURL + "planets/";

  constructor(private http: HttpClient) { }

  // get all films
  public getAllPlanets(): Observable<{ results: IPlanet[] }> {
    return this.http.get<{ results: IPlanet[] }>(this.planetsUrl);
  }

  // get a single planet
  public getSinglePlanet(planetsUrl :string): Observable<IPlanet> {
    return this.http.get<IPlanet>(planetsUrl);
  }

  

}