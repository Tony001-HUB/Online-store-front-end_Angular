import {AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {NewsService} from "./news.service";
import {Subscription} from "rxjs";
import {INews} from "./models/newsModel";

@Component({
  selector: 'app-series',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit  {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource: MatTableDataSource<INews>;
  //dataSource = new MatTableDataSource<PeriodicElement>([]);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getAllNews().subscribe(data => {this.dataSource = new MatTableDataSource<INews>(data), this.initData()});
  }

  public initData() {
    this.dataSource.paginator = this.paginator;
  }
}
