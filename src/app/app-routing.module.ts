import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './pages/characters/characters.component';
import { FilmsComponent } from './pages/films/films.component';

const routes: Routes = [
  {
    path: 'films',
    component: FilmsComponent,
  },
  {
    path: 'characters/:id',
    component: CharactersComponent,
  },
  {
    path: '**',
    redirectTo: '/films',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
