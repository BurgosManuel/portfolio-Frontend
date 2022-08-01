import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Educacion } from './model/Educacion';
import { Experiencia } from './model/Experiencia';
import { Habilidad } from './model/Habilidad';
import { Persona } from './model/Persona';
import { Proyecto } from './model/Proyecto';
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
  educacionData?: Educacion[];
  experienciaData?: Experiencia[];
  habilidadesData?: Habilidad[];
  proyectosData?: Proyecto[];
  baseUrl: string = environment.baseUrl;
  personaId: number = 1;

  mostrar: boolean = false;

  constructor(private portfolioData: PortfolioDataService) {}

  getData() {
    // Obtenemos los datos de Persona para el Nav, Hero y About.
    this.portfolioData
      .getData(`${this.baseUrl}/personas/${this.personaId}`)
      .subscribe((data) => {
        this.datosPersona = data;
        console.log('DatosPersona: ', data);
      });

    this.portfolioData
      .getData(`${this.baseUrl}/secciones`)
      .subscribe((data) => {
        this.datosSecciones = data;
        console.log('DatosSecciones: ', data);
      });

    this.portfolioData
      .getData(`${this.baseUrl}/educacion`)
      .subscribe((data) => {
        this.educacionData = data;
        console.log('Datos Educacion: ', data);
      });

    this.portfolioData
      .getData(`${this.baseUrl}/experiencia`)
      .subscribe((data) => {
        this.experienciaData = data;
        console.log('Datos Experiencia: ', data);
      });

    this.portfolioData
      .getData(`${this.baseUrl}/habilidades`)
      .subscribe((data) => {
        this.habilidadesData = data;
        console.log('Datos Skills: ', data);
        this.mostrar = true;
      });

    this.portfolioData
      .getData(`${this.baseUrl}/proyectos`)
      .subscribe((data) => {
        this.proyectosData = data;
        console.log('Datos Proyectos: ', data);
      });
  }

  ngOnInit() {
    this.getData();
  }
}
