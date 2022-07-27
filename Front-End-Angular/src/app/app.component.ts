import { Component } from '@angular/core';
import { Persona } from './model/Persona';
import { PortfolioDataService } from './services/portfolio-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  datosPersona?: Persona;
  constructor(private portfolioData: PortfolioDataService) {
    // Obtenemos los datos de Persona para el Nav, Hero y About.
    this.portfolioData
      .getData('http://localhost:8080/personas/1')
      .subscribe((data) => {
        this.datosPersona = data;
        console.log('DatosPersona: ', data);
      });
  }

  ngOnInit() {}
}
