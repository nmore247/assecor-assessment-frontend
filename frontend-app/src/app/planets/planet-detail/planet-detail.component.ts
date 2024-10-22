import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { IPlanet } from '../planet';
import { CharacterService } from '../../characters/character.service';
import { FilmsService } from '../../films/films.service';
import { StarshipService } from '../../starships/starship.service';
import { VehicleService } from '../../vehicles/vehicles.service';
import { PlanetsService } from '../planets.service';

@Component({
  selector: 'app-planet-detail',
  standalone: true,
  imports: [RouterModule, MatButtonModule, CommonModule],
  templateUrl: './planet-detail.component.html',
  styleUrl: './planet-detail.component.scss'
})
export class PlanetDetailComponent implements OnInit {

  public selectedPlanet!: IPlanet;
  public characters: string[] = [];
  public films: string[] = [];
  public planets: string[] = [];
  public starships: string[] = [];
  public vehicles: string[] = [];
  public homePlanetofCharacter: string = "";

  constructor(
    private route: ActivatedRoute,
    private filmService: FilmsService,
    private characterService: CharacterService,
    private planetService: PlanetsService,
    private starshipService: StarshipService,
    private vehicleService: VehicleService
  ) { }

  ngOnInit(): void {
    const planetId = this.route.snapshot.paramMap.get('id');
    if (planetId) {
      this.planetService.getPlanetById(planetId).subscribe(planet => {
        this.selectedPlanet = planet;
        //this.getFilmAttributeNames(this.selectedFilm.characters, this.selectedFilm.planets, this.selectedFilm.starships, this.selectedFilm.vehicles)
      })
    }
  }

  public getPlanetAttributeNames(characters: string[], films:string[], starships: string[], vehicles: string[]) {
    
    const _characters: string[] = [];
    const _starships: string[] = [];
    const _vehicles: string[] = [];
    const _films: string[] = [];

    // retrieve list of characters for selected planet
    characters.forEach(character => {
      this.characterService.getSingleCharacter(character).subscribe(data => {
        if (data) {
          _characters.push(data.name)
          this.characters = _characters.slice(0, 3).sort();
        }
      })
    })

     // retrieve list of films for selected characters
     films.forEach(film => {
      this.filmService.getSingleFilm(film).subscribe(data => {
        if (data) {
          _films.push(data.title)
          this.films = _films.slice(0, 3).sort();
        }
      })
    })

    // retrieve list of starships for selected film
    starships.forEach(starship => {
      this.starshipService.getSingleStarship(starship).subscribe(data => {
        if (data) {
          _starships.push(data.name)
          this.starships = _starships.slice(0, 3).sort();
        }
      })
    })

    // retrieve list of vehicles for selected film
    vehicles.forEach(vehicle => {
      this.vehicleService.getSingleVehicle(vehicle).subscribe(data => {
        if (data) {
          _vehicles.push(data.name)
          this.vehicles = _vehicles.slice(0, 3).sort();
        }
      })
    })

  }

}
