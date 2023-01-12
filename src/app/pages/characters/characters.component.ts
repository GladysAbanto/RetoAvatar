import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/models/character.model';
import { Films, Result } from 'src/app/models/films.models';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  id: string = '';
  character!: Character;
  films!: Result[];
  constructor(
    private route: ActivatedRoute,
    private swapiService: SwapiService
  ) {}

  ngOnInit(): void {
    this.getPathParamId();
    this.loadCharacter();
  }
  getPathParamId() {
    this.id = this.route.snapshot.paramMap.get('id') ?? '';
  }
  loadCharacter() {
    this.swapiService.getCharacter(this.id).subscribe((res) => {
      this.character = res;
      this.loadFilms();
    });
  }
  loadFilms() {
    this.swapiService
      .getFilmsCharacter(this.character.films)
      .subscribe((res) => {
        this.films = res;
      });
  }
}
