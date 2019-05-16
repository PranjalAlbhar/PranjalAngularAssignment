import { Injectable } from '@angular/core';

import { Observable, from } from 'rxjs';
import { Book } from './IBookInfo';
import {HttpClientModule, HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookInfoService {
public url="assets/data/BookInfo.json";
  constructor(public httpclient:HttpClient) { }

  public getDetail():Observable<Book[]>
  {

    return this.httpclient.get<Book[]>(this.url);

  }
}
