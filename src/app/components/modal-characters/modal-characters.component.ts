import { Component, OnInit, Input } from '@angular/core';
import { Character } from 'src/app/models/character.model';

@Component({
  selector: 'app-modal-characters',
  templateUrl: './modal-characters.component.html',
  styleUrls: ['./modal-characters.component.css'],
})
export class ModalCharactersComponent implements OnInit {
  @Input() characters!: Character[];
  constructor() {}

  ngOnInit(): void {}
}
