import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FilmsService } from '../../films/films.service';
import { PlanetsService } from '../../planets/planets.service';
import { StarshipService } from '../../starships/starship.service';
import { VehicleService } from '../../vehicles/vehicles.service';
import { CharacterService } from '../character.service';
import { ICharacter } from '../character';

@Component({
  selector: 'app-character-detail',
  standalone: true,
  imports: [RouterModule, MatButtonModule, CommonModule],
  templateUrl: './character-detail.component.html',
  styleUrl: './character-detail.component.scss'
})
export class CharacterDetailComponent implements OnInit {

  public selectedCharacter!: ICharacter;
  public characters: string[] = [];
  public planets: string[] = [];
  public starships: string[] = [];
  public vehicles: string[] = [];
  public films: string[] = [];
  public homePlanet: string = "";

  constructor(
    private route: ActivatedRoute,
    private filmService: FilmsService,
    private characterService: CharacterService,
    private starshipService: StarshipService,
    private vehicleService: VehicleService,
    private planetService: PlanetsService
  ) { }

  ngOnInit(): void {
    const characterId = this.route.snapshot.paramMap.get('id');
    if (characterId) {
      this.characterService.getCharacterById(characterId).subscribe(character => {
        this.selectedCharacter = character;
        this.getCharacterAttributeNames(this.selectedCharacter.films, this.selectedCharacter.starships, this.selectedCharacter.vehicles);
        this.getHomePlanet(this.selectedCharacter);
      })
    }
  }

  private getCharacterAttributeNames(films: string[], starships: string[], vehicles: string[]) {
    const _starships: string[] = [];
    const _vehicles: string[] = [];
    const _films: string[] = [];

    // retrieve list of films for selected characters
    films.forEach(film => {
      this.filmService.getSingleFilm(film).subscribe(data => {
        if (data) {
          _films.push(data.title)
          this.films = _films.slice(0, 3).sort();
        }
      })
    })

    // retrieve list of starships for selected character
    starships.forEach(starship => {
      this.starshipService.getSingleStarship(starship).subscribe(data => {
        if (data) {
          _starships.push(data.name)
          this.starships = _starships.slice(0, 3).sort();
        }
      })
    })

    // retrieve list of vehicles for selected character
    vehicles.forEach(vehicle => {
      this.vehicleService.getSingleVehicle(vehicle).subscribe(data => {
        if (data) {
          _vehicles.push(data.name)
          this.vehicles = _vehicles.slice(0, 3).sort();
        }
      })
    })
  }

  private getHomePlanet(selectedCharacter: ICharacter){
    this.planetService.getSinglePlanet(selectedCharacter.homeworld).subscribe(planet=> {
      this.homePlanet = planet.name;
    })
  }


}
