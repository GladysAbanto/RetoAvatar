import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Result } from 'src/app/models/films.models';
import { ModalCharactersComponent } from '../modal-characters/modal-characters.component';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css'],
})
export class FilmComponent implements OnInit {
  @Input() film!: Result;
  constructor(private modal: NgbModal) {}

  ngOnInit(): void {}
  openModal() {
    this.modal.open(ModalCharactersComponent);
  }
}
