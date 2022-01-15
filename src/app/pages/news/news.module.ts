import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';
import {RouterModule} from "@angular/router";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    NewsComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    RouterModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    MatButtonModule
  ]
})
export class NewsModule { }
