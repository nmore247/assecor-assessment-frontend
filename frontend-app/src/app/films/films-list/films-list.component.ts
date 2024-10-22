import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { FilmsService } from '../films.service';
import { IFilm } from '../film';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-films-list',
  standalone: true,
  imports: [MatCardModule, MatGridListModule, CommonModule, RouterModule, MatProgressSpinnerModule],
  templateUrl: './films-list.component.html',
  styleUrl: './films-list.component.scss'
})
export class FilmsListComponent implements OnInit {
  public films: IFilm[] = [];

  constructor(public filmsService: FilmsService, private router: Router) {

  }

  ngOnInit(): void {
    this.filmsService.getAllFilms().subscribe(response => {
      if (response) {
        this.films = response.results
      }
    })
  }


}
