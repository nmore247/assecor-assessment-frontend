import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatChipsModule } from '@angular/material/chips';
import { IFilm } from '../film';
import { FilmsService } from '../films.service';
import { CharacterService } from '../../characters/character.service';
import { ICharacter } from '../../characters/character';

@Component({
  selector: 'app-film-detail',
  standalone: true,
  imports: [RouterModule, MatChipsModule],
  templateUrl: './film-detail.component.html',
  styleUrl: './film-detail.component.scss'
})
export class FilmDetailComponent implements OnInit {

  public selectedFilm!: IFilm;
  public characters: string[] = [];

  constructor(private route: ActivatedRoute, private filmService: FilmsService, private characterService: CharacterService) { }

  ngOnInit(): void {
    const filmId = this.route.snapshot.paramMap.get('id');
    if (filmId) {
      this.filmService.getFilmById(filmId).subscribe(film => {
        this.selectedFilm = film;
        this.getCharacterNames(this.selectedFilm.characters)
      })
    }
  }

  public getCharacterNames(characters: string[]) {
    const _characters: string[] = [];
    console.log(characters.length)
    characters.forEach(character => {
      this.characterService.getSingleCharacter(character).subscribe(data => {
        if (data)
          _characters.push(data.name)
          this.characters = _characters.slice(0, 3);
      })
    })

    

    return this.characters;
  }





}