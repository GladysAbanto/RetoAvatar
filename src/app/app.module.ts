import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FilmsComponent } from './pages/films/films.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { AppRoutingModule } from './app-routing.module';
import { FilmComponent } from './components/film/film.component';

@NgModule({
  declarations: [AppComponent, FilmsComponent, CharactersComponent, FilmComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
