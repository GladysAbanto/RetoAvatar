import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Result } from 'src/app/models/films.models';
import { SwapiService } from 'src/app/services/swapi.service';
import { ModalCharactersComponent } from '../modal-characters/modal-characters.component';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css'],
})
export class FilmComponent implements OnInit {
  @Input() film!: Result;
  constructor(private modal: NgbModal, private swapiService: SwapiService) {}

  ngOnInit(): void {}
  openModal() {}
  loadCharacters() {
    this.swapiService.getCharacters(this.film.characters).subscribe((res) => {
      const modalRef = this.modal.open(ModalCharactersComponent);
      modalRef.componentInstance.characters = res;
    });
  }
}
