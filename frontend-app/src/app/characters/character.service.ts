import { Injectable } from '@angular/core';
import { baseURL } from '../environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICharacter } from './character';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private charactersUrl = baseURL + "people/";

  constructor(private http: HttpClient, private router: Router) { }

  // get all films
  public getAllCharacters(): Observable<{ results: ICharacter[] }> {
    return this.http.get<{ results: ICharacter[] }>(this.charactersUrl);
  }

  // get a single character
  public getSingleCharacter(characterUrl :string): Observable<ICharacter> {
    return this.http.get<ICharacter>(characterUrl);
  }

  // get a character by ID
  public getCharacterById(id: string): Observable<ICharacter> {
    const url = `${this.charactersUrl}${id}`;
    return this.http.get<ICharacter>(url);
  }

  public navigateToCharacter(id: string): void {
    this.router.navigate(['characters', id]);
  }

}
