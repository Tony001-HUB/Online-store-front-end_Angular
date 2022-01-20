import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoriteNewsComponent } from './favorite-news.component';

const routes: Routes = [{ path: '', component: FavoriteNewsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavoriteNewsRoutingModule { }
