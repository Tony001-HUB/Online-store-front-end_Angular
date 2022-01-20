import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {INews} from "../models/news";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private httpClient: HttpClient) { }

  public addNewsToUser(obj): Observable<void> {
    return this.httpClient.post<void>(`${environment.localDBUrl}/users/addNewsToUser`, obj);
  }

  public getAllNews(): Observable<INews[]> {
    return this.httpClient.get<INews[]>(`${environment.localDBUrl}/news`, {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    });
  }

  public createNews(news: INews): Observable<void> {
    return this.httpClient.post<void>(`${environment.localDBUrl}/news`, news);
  }

  public deleteNews(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${environment.localDBUrl}/news/${id}`);
  }

  public updateNews(news: INews, id: number): Observable<void> {
    return this.httpClient.put<void>(`${environment.localDBUrl}/news/${id}`, news);
  }

  public deleteNewsFromUserList(newsId: number): Observable<void> {
    return this.httpClient.delete<void>(`${environment.localDBUrl}/users/deleteMyNew/${newsId}`)
  }
}
