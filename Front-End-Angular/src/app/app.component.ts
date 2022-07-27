import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { Persona } from './model/Persona';
import { Seccion } from './model/Seccion';
import { PortfolioDataService } from './services/portfolio-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  datosPersona?: Persona;
  datosSecciones?: Seccion[];
  mostrar:boolean = false;

  eventsSubject: Subject<void> = new Subject<void>();

  emitEventToChild() {
    this.eventsSubject.next();
  }

  constructor(private portfolioData: PortfolioDataService) {
    // Obtenemos los datos de Persona para el Nav, Hero y About.
    this.portfolioData
      .getData('http://localhost:8080/personas/1')
      .subscribe((data) => {
        this.datosPersona = data;
        console.log('DatosPersona: ', data);
      });

    this.portfolioData
      .getData('http://localhost:8080/secciones')
      .subscribe((data) => {
        this.datosSecciones = data;
        console.log('DatosSecciones: ', data);
        this.mostrar = true;
      });
  }
}
