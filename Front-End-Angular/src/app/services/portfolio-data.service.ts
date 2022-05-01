import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PortfolioDataService {
  apiUrl: string = 'http://localhost:5000/portfolioData';

  constructor(private http: HttpClient) {}
  
  getData(): Observable<any> {
    const url = this.apiUrl;
    return this.http.get(url);
  }
}
