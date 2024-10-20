import { Injectable } from '@angular/core';
import { baseURL } from '../environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IVehicle } from './vehicle';


@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http: HttpClient) { }

  // get a single vehicle
  public getSinglePlanet(vehicleUrl: string): Observable<IVehicle> {
    return this.http.get<IVehicle>(vehicleUrl);
  }



}
