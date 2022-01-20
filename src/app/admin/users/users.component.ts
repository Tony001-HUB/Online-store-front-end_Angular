import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {INews} from "../../pages/news/models/news";
import {MatPaginator} from "@angular/material/paginator";
import {NewsService} from "../../pages/news/services/news.service";
import {MatDialog} from "@angular/material/dialog";
import {UsersService} from "../services/users.service";
import {shareReplay} from "rxjs/operators";
import {IUser} from "../models/user";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  displayedColumns: string[] = [ 'name', 'secondName', 'email'];
  dataSource: MatTableDataSource<IUser>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private usersService: UsersService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.fetchUsers();
  }

  public fetchUsers() {
    this.usersService.getAllUsers()
      .pipe(shareReplay(1))
      .subscribe(data =>
      {
        this.dataSource = new MatTableDataSource<IUser>(data);
        this.dataSource.paginator = this.paginator;
      });
  }
}
