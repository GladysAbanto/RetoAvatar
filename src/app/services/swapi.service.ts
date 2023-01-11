import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SWAPI } from '../constants/url.constants';
import { Films } from '../models/films.models';

@Injectable({
  providedIn: 'root',
})
export class SwapiService {
  constructor(private http: HttpClient) {}
  getFilms() {
    return this.http.get<Films>(URL_SWAPI.FILMS);
  }
}
