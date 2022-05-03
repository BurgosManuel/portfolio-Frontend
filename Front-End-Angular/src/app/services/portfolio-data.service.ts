import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root',
})
export class PortfolioDataService {
  apiUrl: string = 'http://localhost:5000/portfolioData';

  constructor(private http: HttpClient) {}
  
  getData(url: string): Observable<any> {
    return this.http.get(url);
  }
}
