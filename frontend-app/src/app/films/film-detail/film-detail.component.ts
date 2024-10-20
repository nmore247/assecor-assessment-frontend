import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { IFilm } from '../film';
import { FilmsService } from '../films.service';
import { CharacterService } from '../../characters/character.service';
import { PlanetsService } from '../../planets/planets.service';
import { StarshipService } from '../../starships/starship.service';
import { VehicleService } from '../../vehicles/vehicles.service';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-film-detail',
  standalone: true,
  imports: [RouterModule, MatButtonModule],
  templateUrl: './film-detail.component.html',
  styleUrl: './film-detail.component.scss'
})
export class FilmDetailComponent implements OnInit {

  public selectedFilm!: IFilm;
  public characters: string[] = [];
  public planets: string[] = [];
  public starships: string[] = [];
  public vehicles: string[] = [];


  constructor(
    private route: ActivatedRoute,
    private filmService: FilmsService,
    private characterService: CharacterService,
    private planetService: PlanetsService,
    private starshipService: StarshipService,
    private vehicleService: VehicleService
  ) { }

  ngOnInit(): void {
    const filmId = this.route.snapshot.paramMap.get('id');
    if (filmId) {
      this.filmService.getFilmById(filmId).subscribe(film => {
        this.selectedFilm = film;
        this.getFilmAttributeNames(this.selectedFilm.characters, this.selectedFilm.planets, this.selectedFilm.starships, this.selectedFilm.vehicles)
      })
    }
  }

  public getFilmAttributeNames(characters: string[], planets: string[], starships: string[], vehicles: string[]) {
    const _characters: string[] = [];
    const _planets: string[] = [];
    const _starships: string[] = [];
    const _vehicles: string[] = [];

    // retrieve list of characters for selected film
    characters.forEach(character => {
      this.characterService.getSingleCharacter(character).subscribe(data => {
        if (data) {
          _characters.push(data.name)
          this.characters = _characters.slice(0, 3).sort();
        }
      })
    })

    // retrieve list of planets for selected film
    planets.forEach(planet => {
      this.planetService.getSinglePlanet(planet).subscribe(data => {
        if (data) {
          _planets.push(data.name)
          this.planets = _planets.slice(0, 3).sort();
        }
      })
    })

    // retrieve list of starships for selected film
    starships.forEach(starship => {
      this.starshipService.getSinglePlanet(starship).subscribe(data => {
        if (data) {
          _starships.push(data.name)
          this.starships = _starships.slice(0, 3).sort();
        }
      })
    })

    // retrieve list of vehicles for selected film
    vehicles.forEach(vehicle => {
      this.vehicleService.getSinglePlanet(vehicle).subscribe(data => {
        if (data) {
          _vehicles.push(data.name)
          this.vehicles = _vehicles.slice(0, 3).sort();
        }
      })
    })

  }







}