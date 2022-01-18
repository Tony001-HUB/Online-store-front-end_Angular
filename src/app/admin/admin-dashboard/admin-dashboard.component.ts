import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  public isLogin: boolean = true;
  public isRegistration: boolean = true;

  constructor(private router: Router, private authService: AuthService) {
    this.router.events.subscribe(() => {
      this.isLogin = this.router.url.includes('/login');
      this.isRegistration = this.router.url.includes('/registration');
    });
  }

  ngOnInit(): void {}

  public logout() {
    this.authService.logout();
  }
}
