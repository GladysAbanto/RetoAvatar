import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FilmsComponent } from './pages/films/films.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { AppRoutingModule } from './app-routing.module';
import { FilmComponent } from './components/film/film.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalCharactersComponent } from './components/modal-characters/modal-characters.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    CharactersComponent,
    FilmComponent,
    ModalCharactersComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, NgbModalModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
