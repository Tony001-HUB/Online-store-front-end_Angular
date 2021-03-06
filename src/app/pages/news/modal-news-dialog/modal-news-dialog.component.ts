import { Component, Inject, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../models/dialog';
import {NewsService} from "../services/news.service";

@Component({
  selector: 'app-modal-news-dialog',
  templateUrl: './modal-news-dialog.component.html',
  styleUrls: ['./modal-news-dialog.component.css']
})
export class ModalNewsDialogComponent implements OnInit {
  public formGroup: FormGroup;
  public target: boolean = false

  constructor(
    public dialogRef: MatDialogRef<ModalNewsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public formBuilder: FormBuilder,
    private newsService: NewsService
  ) {}

  ngOnInit(): void {
    this.definitionTarget(this.data);
    this.formInitialization();
  }

  private formInitialization() {
    this.formGroup = this.formBuilder.group({
      title: new FormControl(this.target ? null : this.data.object.title, [Validators.required,Validators.maxLength(100)]),
      country: new FormControl(this.target ? null : this.data.object.country, [Validators.required]),
      link: new FormControl(this.target ? null : this.data.object.link, [Validators.required])
    });
  }

  public closeModal() {
    this.dialogRef.close();
  }

  public createNews() {
    this.newsService.createNews({
      title: this.formGroup.value.title,
      country: this.formGroup.value.country,
      link: this.formGroup.value.link
    }).subscribe();
    this.dialogRef.close();
  }

  public editNews() {
    console.log('редактирование задачи', this.data.object)
    this.newsService.updateNews(this.formGroup.value, this.data.object.id).subscribe();
    this.dialogRef.close();
  }

  public definitionTarget(currentTarget: DialogData) {
    currentTarget.target === 'add-btn' ? this.target = true : this.target = false;
  }
}
