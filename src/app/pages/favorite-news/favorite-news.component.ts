import { Component, OnInit } from '@angular/core';
import {APIUserResponse, UsersService} from "../news/services/users.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-favorite-news',
  templateUrl: './favorite-news.component.html',
  styleUrls: ['./favorite-news.component.css']
})
export class FavoriteNewsComponent implements OnInit {
  public news: APIUserResponse[] = [];

  constructor(public usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.usersService.getUserByEmail(localStorage.getItem('user-email')).subscribe(data => {this.news = data['news']});
    console.log(this.news)
  }

  public openNews(link: string) {
    this.router.navigate([link]).then();
  }
}
