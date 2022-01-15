import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {INews} from "./models/newsModel";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private httpClient: HttpClient) { }

  getAllNews(): Observable<INews[]> {
    return this.httpClient.get<INews[]>(`${environment.localDBUrl}/news`, {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    });
  }
}
