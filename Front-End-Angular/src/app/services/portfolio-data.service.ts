import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SectionItem } from 'src/app/classes/items';

// Utilizando el modulo HTTPHeaders, generamos una variable que nos permitirá indicar que el archivo que estamos enviando es un JSON. Esto es necesario para los POST/PUT/PATCH en json-server.
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class PortfolioDataService {
  // Inyectamos el httpclient
  constructor(private http: HttpClient) {}

  // Creamos el método que nos retornará los datos desde la API.
  getData(url: string): Observable<any> {
    return this.http.get(url);
  }

  // Método que actualiza los datos, la misma genera un objeto 'ISection', que tomará una key 'description' y un value 'data', formato que tenemos en nuestro JSON con información.
  updateSection(url: string, data: any): Observable<any> {
    const sectionData: SectionItem = {
      description: data,
    };
    // Pasamos como parámetros la url, el objeto generado a partir de los datos, y los httpOptions definidos previamente.
    return this.http.put<any>(url, sectionData, httpOptions);
  }

  updateItem(url: string, data: any): Observable<any> {
    return this.http.put<any>(url, data, httpOptions);
  }

  addItem(url: string, data: any): Observable<any> {
    console.log(data, url);
    return this.http.post<any>(url, data, httpOptions);
  }

  deleteItem(url: string, data: any): Observable<any> {
    let itemUrl = url + `/${data.id}`;
    console.log('newUrl = ', itemUrl);
    return this.http.delete<any>(itemUrl, data);
  }
}
