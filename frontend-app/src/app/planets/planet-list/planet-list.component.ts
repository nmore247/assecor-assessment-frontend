import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router, RouterModule } from '@angular/router';
import { IPlanet } from '../planet';
import { PlanetsService } from '../planets.service';

@Component({
  selector: 'app-planet-list',
  standalone: true,
  imports: [MatCardModule, MatGridListModule, CommonModule, RouterModule, MatProgressSpinnerModule],
  templateUrl: './planet-list.component.html',
  styleUrl: './planet-list.component.scss'
})
export class PlanetListComponent implements OnInit {

public planets: IPlanet[] = [];

constructor(private planetService: PlanetsService, private router: Router) {

}
  ngOnInit(): void {
    this.planetService.getAllPlanets().subscribe(response=> {
      if(response){
        this.planets = response.results
      }
    })
  }

  public navigateToPlanet(id: string): void {
    this.router.navigate(['planets', id]);
  }
}
