import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {MatSliderModule} from "@angular/material/slider";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatSliderModule,
    RouterModule
  ]
})
export class HomeModule { }
