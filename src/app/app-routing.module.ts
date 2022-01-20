import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import {LoginComponent} from "./admin/login/login.component";
import {RegistrationComponent} from "./admin/registration/registration.component";
import { AuthGuard } from './admin/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'layout/login', pathMatch: 'full' },
  { path: 'layout', component: MainLayoutComponent, children:[
      { path: 'registration', component: RegistrationComponent},
      { path: 'login', component: LoginComponent},
      { path: 'Movies', loadChildren: () => import('./pages/movies/movies.module').then(m => m.MoviesModule), canActivate: [AuthGuard] },
      { path: 'News', loadChildren: () => import('./pages/news/news.module').then(m => m.NewsModule), canActivate: [AuthGuard] },
      { path: 'Music', loadChildren: () => import('./pages/music/music.module').then(m => m.MusicModule), canActivate: [AuthGuard] }
    ] },
  { path: '..................', loadChildren: () => import('./admin/admin.module').then(module => module.AdminModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
