import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { environment } from 'src/environments/environment';

export interface APIUserResponse {
  id?: number,
  country: string,
  title: string,
  link: string
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  public getUserByEmail(email: string): Observable<APIUserResponse[]> {
    return this.httpClient.get<APIUserResponse[]>(`${environment.localDBUrl}/users/${email}`);
  }
}
