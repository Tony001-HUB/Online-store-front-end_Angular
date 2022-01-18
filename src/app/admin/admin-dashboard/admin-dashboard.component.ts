import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../login/services/auth.service";

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  public isLogin: boolean = true;

  constructor(private router: Router, private authService: AuthService) {
    this.router.events.subscribe(() => {
      this.isLogin = this.router.url.includes('/login');
    });
  }

  ngOnInit(): void {}

  public logout() {
    this.authService.logout();
  }
}
