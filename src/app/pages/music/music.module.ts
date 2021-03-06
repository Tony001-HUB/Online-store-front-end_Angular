import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicRoutingModule } from './music-routing.module';
import { MusicComponent } from './music.component';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    MusicComponent
  ],
  imports: [
    CommonModule,
    MusicRoutingModule,
    RouterModule
  ]
})
export class MusicModule { }
