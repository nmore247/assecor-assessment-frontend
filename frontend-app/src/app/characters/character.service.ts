import { Injectable } from '@angular/core';
import { baseURL } from '../environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICharacter } from './character';


@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private charactersUrl = baseURL + "people/";

  constructor(private http: HttpClient) { }

  // get all films
  public getAllCharacters(): Observable<{ results: ICharacter[] }> {
    return this.http.get<{ results: ICharacter[] }>(this.charactersUrl);
  }

  // get a single character
  public getSingleCharacter(characterUrl :string): Observable<ICharacter> {
    return this.http.get<ICharacter>(characterUrl);
  }

  

}
