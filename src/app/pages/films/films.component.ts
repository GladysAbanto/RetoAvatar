import { Component, OnInit } from '@angular/core';
import { Films } from 'src/app/models/films.models';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css'],
})
export class FilmsComponent implements OnInit {
  films!: Films;
  constructor(private swapiService: SwapiService) {}

  ngOnInit(): void {
    this.loadFilms();
  }
  loadFilms() {
    this.swapiService.getFilms().subscribe((res) => {
      this.films = res;
    });
  }
}
