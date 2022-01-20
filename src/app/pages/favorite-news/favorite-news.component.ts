import { Component, OnInit } from '@angular/core';
import {APIUserResponse, UsersService} from "../news/services/users.service";
import {Router} from "@angular/router";
import {NewsService} from "../news/services/news.service";

@Component({
  selector: 'app-favorite-news',
  templateUrl: './favorite-news.component.html',
  styleUrls: ['./favorite-news.component.css']
})
export class FavoriteNewsComponent implements OnInit {
  public news: APIUserResponse[] = [];

  constructor(public usersService: UsersService, private router: Router, public newsService: NewsService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  private fetchData() {
    this.usersService.getUserByEmail(localStorage.getItem('user-email')).subscribe(data => {this.news = data['news']});
  }

  public openNews(link: string) {
    window.location.replace(link);
  }

  public deleteNews(newsId: number) {
    this.newsService.deleteNewsFromUserList(newsId).subscribe(
      () => {
        this.fetchData();
        alert(`Новость успешно удалена из выбранных`);
      },
      () => { alert('Упс... Что-то пошло не так');});
  }
}
