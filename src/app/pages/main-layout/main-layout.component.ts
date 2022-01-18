import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {

  public arrOfRoutes = [];

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.arrOfRoutes = ['Main-layout' ,...this.modifyRoutes(this.router.url.split('/'))];
    });
  }

  ngOnInit(): void {}

  private modifyRoutes(routes) {
    return routes.filter(data => data !== '');
  }
}
