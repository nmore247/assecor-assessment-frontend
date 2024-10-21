import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router, RouterModule } from '@angular/router';
import { CharacterService } from '../character.service';
import { ICharacter } from '../character';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [MatCardModule, MatGridListModule, CommonModule, RouterModule, MatProgressSpinnerModule],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.scss'
})
export class CharacterListComponent implements OnInit {

  public characters: ICharacter[] = [];
  constructor(private characterService: CharacterService, private router: Router) {

  }

  ngOnInit(): void {
    this.characterService.getAllCharacters().subscribe(response => {
      if (response) {
        this.characters = response.results
      }
    })
  }

  public navigateToCharacter(id: string): void {
    this.router.navigate(['characters', id]);
  }
}
