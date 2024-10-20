import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { FilmsListService } from '../films-list.service';
import { IFilm } from '../film';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-films-list',
  standalone: true,
  imports: [MatCardModule, MatGridListModule, CommonModule],
  templateUrl: './films-list.component.html',
  styleUrl: './films-list.component.scss'
})
export class FilmsListComponent implements OnInit {
  public films: IFilm[] = [];

  constructor(private filmsListService: FilmsListService) {

  }
  ngOnInit(): void {
    this.filmsListService.getFilms().subscribe(response => {
      if (response) {
        this.films = response.results
        console.log(this.films)
      }
    })
  }
}
