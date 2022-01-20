import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {NewsService} from "./services/news.service";
import {INews} from "./models/news";
import {MatDialog} from '@angular/material/dialog';
import {ModalNewsDialogComponent} from "./modal-news-dialog/modal-news-dialog.component";
import { shareReplay } from 'rxjs/operators';
import {IFavorite} from "./models/favorite";



@Component({
  selector: 'app-series',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit  {
  displayedColumns: string[] = [ 'name', 'weight', 'symbol', 'delete-btn', 'edit-btn', 'add-to-favorite'];
  dataSource: MatTableDataSource<INews>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private newsService: NewsService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.fetchNews();
  }

  public fetchNews() {
    this.newsService.getAllNews()
      .pipe(shareReplay(1))
      .subscribe(data =>
      {
        this.dataSource = new MatTableDataSource<INews>(data);
        this.dataSource.paginator = this.paginator;
      });
  }

  public removeNews(selectedNews: INews) {
    this.newsService.deleteNews(selectedNews.id).subscribe();
    this.fetchNews();
  }

  public editNews(selectedNews: INews) {
    this.openDialog('edit-btn', selectedNews);
  }

  public createNews() {
    this.openDialog('add-btn');
  }

  public openDialog(target: string, object?: INews): void {
    const addButtonDialogRef = this.dialog.open(ModalNewsDialogComponent, {
      width: '700px',
      height: '600px',
      data: {target: target, object: object},
    });

    addButtonDialogRef.afterClosed().subscribe(result => {
      this.fetchNews();
    });
  }

  public addNewsToFavorite(element: IFavorite) {
     const infoAObj = {
       newsId: element.id,
       email: localStorage.getItem('user-email')
     }
     this.newsService.addNewsToUser(infoAObj).subscribe(() => {
         alert(`Новость успешно добавлена в избранные: ${element['title']}`);
       },
       () => { alert('Упс... Что-то пошло не так');});
  }
}
