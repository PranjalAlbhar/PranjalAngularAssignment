import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { iStudent } from './IStudent';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  public url="assets/data/StudentData.json";

  constructor(public httpClient:HttpClient) 
  { }

  public sendData():Observable<iStudent[]>
  {
      return this.httpClient.get<iStudent[]>(this.url);

  }

}
