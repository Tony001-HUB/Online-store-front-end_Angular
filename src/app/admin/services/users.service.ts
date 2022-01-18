import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {IUser} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient, private router: Router) { }

  public getAllUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${environment.localDBUrl}/users`);
  }
}
