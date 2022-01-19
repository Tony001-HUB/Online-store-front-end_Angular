import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import {LoginComponent} from "./admin/login/login.component";
import {RegistrationComponent} from "./admin/registration/registration.component";

const routes: Routes = [
  { path: '', redirectTo: 'layout/login', pathMatch: 'full' },
  { path: 'layout', component: MainLayoutComponent, children:[
      { path: 'registration', component: RegistrationComponent},
      { path: 'login', component: LoginComponent},
      { path: 'Movies', loadChildren: () => import('./pages/movies/movies.module').then(m => m.MoviesModule) },
      { path: 'News', loadChildren: () => import('./pages/news/news.module').then(m => m.NewsModule) },
      { path: 'Music', loadChildren: () => import('./pages/music/music.module').then(m => m.MusicModule) }
    ] },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(module => module.AdminModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
