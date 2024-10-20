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

  // get a single planet
  public getSinglePlanet(planetsUrl :string): Observable<IPlanet> {
    return this.http.get<IPlanet>(planetsUrl);
  }

  

}
