import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) }, { path: 'movies', loadChildren: () => import('./pages/movies/movies.module').then(m => m.MoviesModule) }, { path: 'series', loadChildren: () => import('./pages/series/series.module').then(m => m.SeriesModule) }, { path: 'music', loadChildren: () => import('./pages/music/music.module').then(m => m.MusicModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
