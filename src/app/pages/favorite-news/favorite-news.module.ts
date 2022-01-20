import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoriteNewsRoutingModule } from './favorite-news-routing.module';
import { FavoriteNewsComponent } from './favorite-news.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    FavoriteNewsComponent
  ],
  imports: [
    CommonModule,
    FavoriteNewsRoutingModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class FavoriteNewsModule { }
