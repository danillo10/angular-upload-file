import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  servidor: string = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  create(body){
    return this.http.post(`${this.servidor}/venta`, body)
    .pipe(res => res)
  }


}
