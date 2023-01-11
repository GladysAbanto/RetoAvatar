import { Component, OnInit, Input } from '@angular/core';
import { Result } from 'src/app/models/films.models';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css'],
})
export class FilmComponent implements OnInit {
  @Input() film!: Result;
  constructor() {}

  ngOnInit(): void {}
}
