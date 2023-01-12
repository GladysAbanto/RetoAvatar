import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SWAPI } from '../constants/url.constants';
import { Films } from '../models/films.models';
import { forkJoin } from 'rxjs';
import { Character } from '../models/character.model';

@Injectable({
  providedIn: 'root',
})
export class SwapiService {
  constructor(private http: HttpClient) {}
  getFilms() {
    return this.http.get<Films>(URL_SWAPI.FILMS);
  }
  getCharacters(characters: string[]) {
    const nCharacters = 5;
    const $characters = characters
      .slice(0, nCharacters)
      .map((url) => this.http.get<Character>(url + '?format=json'));
    return forkJoin($characters);
  }
}
