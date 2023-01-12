import { Component, OnInit, Input } from '@angular/core';
import { Character } from 'src/app/models/character.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-characters',
  templateUrl: './modal-characters.component.html',
  styleUrls: ['./modal-characters.component.css'],
})
export class ModalCharactersComponent implements OnInit {
  @Input() characters!: Character[];

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {}
  viewMore(url: string) {
    const urlSplit = url.split('/');
    return urlSplit[urlSplit.length - 2];
  }
}
