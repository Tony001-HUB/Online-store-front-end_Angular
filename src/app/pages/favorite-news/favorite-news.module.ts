import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoriteNewsRoutingModule } from './favorite-news-routing.module';
import { FavoriteNewsComponent } from './favorite-news.component';


@NgModule({
  declarations: [
    FavoriteNewsComponent
  ],
  imports: [
    CommonModule,
    FavoriteNewsRoutingModule
  ]
})
export class FavoriteNewsModule { }
