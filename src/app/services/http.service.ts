import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

  getData<T>(url: string): Observable<T> {
    return this.http.get<T>(url);
  }

  // tslint:disable-next-line:no-any
  postData<T>(url: string, data: any): Observable<T> {
    return this.http.post<T>(url, data);
  }

}
