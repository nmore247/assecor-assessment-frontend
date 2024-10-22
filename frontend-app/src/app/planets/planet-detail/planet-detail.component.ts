import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { IPlanet } from '../planet';
import { CharacterService } from '../../characters/character.service';
import { FilmsService } from '../../films/films.service';
import { PlanetsService } from '../planets.service';
import { IFilm } from '../../films/film';
import { ICharacter } from '../../characters/character';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-planet-detail',
  standalone: true,
  imports: [RouterModule, MatButtonModule, CommonModule, MatProgressSpinnerModule],
  templateUrl: './planet-detail.component.html',
  styleUrl: './planet-detail.component.scss'
})
export class PlanetDetailComponent implements OnInit {

  public selectedPlanet!: IPlanet;

  public characters: ICharacter[] = [];
  public films: IFilm[] = [];
  public homePlanetofCharacter: string = "";

  constructor(
    private route: ActivatedRoute,
    public filmService: FilmsService,
    public characterService: CharacterService,
    private planetService: PlanetsService,
  ) { }

  ngOnInit(): void {
    const planetId = this.route.snapshot.paramMap.get('id');
    if (planetId) {
      this.planetService.getPlanetById(planetId).subscribe(planet => {
        this.selectedPlanet = planet;
        this.getPlanetAttributeNames(this.selectedPlanet.residents, this.selectedPlanet.films)
      })
    }
  }

  public getPlanetAttributeNames(characters: string[], films:string[]) {
    
    const _characters: ICharacter[] = [];
    const _films: IFilm[] = [];

    // retrieve list of characters for selected planet
    characters.forEach(character => {
      this.characterService.getSingleCharacter(character).subscribe(data => {
        if (data) {
          _characters.push(data)
          this.characters = _characters.slice(0, 3).sort();
        }
      })
    })

     // retrieve list of films for selected planet
     films.forEach(film => {
      this.filmService.getSingleFilm(film).subscribe(data => {
        if (data) {
          _films.push(data)
          this.films = _films.slice(0, 3).sort();
        }
      })
    })

  }


}
