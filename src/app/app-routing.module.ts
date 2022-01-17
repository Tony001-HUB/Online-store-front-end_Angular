import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';

const routes: Routes = [
  { path: '', component: MainLayoutComponent, children:[
      { path: 'movies', loadChildren: () => import('./pages/movies/movies.module').then(m => m.MoviesModule) },
      { path: 'news', loadChildren: () => import('./pages/news/news.module').then(m => m.NewsModule) },
      { path: 'music', loadChildren: () => import('./pages/music/music.module').then(m => m.MusicModule) }
    ] },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(module => module.AdminModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
