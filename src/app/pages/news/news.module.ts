import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';
import {RouterModule} from "@angular/router";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from "@angular/material/button";
import { ModalNewsDialogComponent } from './modal-news-dialog/modal-news-dialog.component';
import { MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [
    NewsComponent,
    ModalNewsDialogComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    RouterModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule
  ]
})
export class NewsModule { }
