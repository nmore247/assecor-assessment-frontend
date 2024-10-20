import { Injectable } from '@angular/core';
import { baseURL } from '../environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IStarship } from './starship';



@Injectable({
  providedIn: 'root'
})
export class StarshipService {

  constructor(private http: HttpClient) { }

  // get a single starship
  public getSinglePlanet(planetsUrl :string): Observable<IStarship> {
    return this.http.get<IStarship>(planetsUrl);
  }

  

}

