import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISection, Item } from 'src/section';

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
    const sectionData: ISection = {
      description: data,
    };
    // Pasamos como parámetros la url, el objeto generado a partir de los datos, y los httpOptions definidos previamente.
    return this.http.put<any>(url, sectionData, httpOptions);
  }

  updateProfessionalItem(url: string, data: any): Observable<any> {
    return this.http.put<any>(url, data, httpOptions);
  }
}
