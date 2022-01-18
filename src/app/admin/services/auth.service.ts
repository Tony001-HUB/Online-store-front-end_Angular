import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable, tap } from 'rxjs';
import {IUser} from "../login/models/user";
import { IAuthenticationInfo } from '../login/models/authenticationInfo';
import {environment} from "../../../environments/environment";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  public login(user: IUser): Observable<IAuthenticationInfo> {
    return this.http.post<IAuthenticationInfo>(`${environment.localDBUrl}/auth/login`, user).pipe(tap(this.setToken));
  }

  public registration(user: IUser): Observable<IAuthenticationInfo> {
    return this.http.post<IAuthenticationInfo>(`${environment.localDBUrl}/auth/registration`, user).pipe(tap(this.setToken));
  }

  public logout(): void {
    this.setToken(null);
    this.router.navigate(['/']).then();
  }

  private setToken(response: IAuthenticationInfo | null): void {
    if (response) {
      const expData = new Date( new Date().getTime() + 3600 * 1000);
      localStorage.setItem('fb-token-exp', expData.toString());
      localStorage.setItem('fb-token', response.token);
    } else {
      localStorage.clear();
    }
  }

  get token(): string {
    const expDate = new Date(localStorage.getItem('fb-token-exp'));
    if ( new Date() > expDate ) {
      this.logout();
      return null;
    }
    return localStorage.getItem('fb-token');
  }
}
