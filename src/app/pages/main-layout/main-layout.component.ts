import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from "../../admin/services/auth.service";

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {

  public isAuth: boolean = true;
  public arrOfRoutes = [];

  constructor(private router: Router, public authService: AuthService) {
    this.router.events.subscribe(() => {
        this.arrOfRoutes = ['Main-App', ...this.modifyRoutes(this.router.url.split('/'))];
        this.checkUrl(this.router.url);
        this.authService.userEmail.next(localStorage.getItem('user-email'));
    });
  }

  ngOnInit(): void {}

  private modifyRoutes(routes) {
    return routes.filter(data => data !== '');
  }

  private checkUrl(url: string) {
    if (url.includes('/login') || url.includes('/registration')) {
      this.isAuth = true;
    } else {
      this.isAuth = false;
    }
  }
}
