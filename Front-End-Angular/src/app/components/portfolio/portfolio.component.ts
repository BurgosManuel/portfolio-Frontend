import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from 'src/app/model/Educacion';
import { Experiencia } from 'src/app/model/Experiencia';
import { Habilidad } from 'src/app/model/Habilidad';
import { Persona } from 'src/app/model/Persona';
import { Proyecto } from 'src/app/model/Proyecto';
import { Seccion } from 'src/app/model/Seccion';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { environment } from 'src/environments/environment';
export let personaID: number = 3;


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  datosPersona?: Persona;
  datosSecciones?: Seccion[];
  educacionData?: Educacion[];
  experienciaData?: Experiencia[];
  habilidadesData?: Habilidad[];
  proyectosData?: Proyecto[];
  baseUrl: string = environment.baseUrl;

  mostrar: boolean = false;

  constructor(
    private portfolioData: PortfolioDataService,
    private tokenStorage: TokenStorageService
  ) {}

  reloadPersona() {
    this.portfolioData
      .getData(`${this.baseUrl}/personas/${this.datosPersona?.id}`)
      .subscribe((data) => {
        this.datosPersona = data;
      });
  }

  getData() {
    // Obtenemos los datos de Persona para el Nav, Hero y About.
    this.portfolioData
      .getData(`${this.baseUrl}/personas/${personaID}`)
      .subscribe((data) => {
        this.datosPersona = data;
        console.log("PersonaDATA", data)
      });

    this.portfolioData
      .getData(`${this.baseUrl}/secciones/listar`)
      .subscribe((data) => {
        this.datosSecciones = data;
      });

    this.portfolioData
      .getData(`${this.baseUrl}/educacion/listar`)
      .subscribe((data) => {
        this.educacionData = data;
      });

    this.portfolioData
      .getData(`${this.baseUrl}/experiencia/listar`)
      .subscribe((data) => {
        this.experienciaData = data;
      });

    this.portfolioData
      .getData(`${this.baseUrl}/habilidades/listar`)
      .subscribe((data) => {
        this.habilidadesData = data;
        this.mostrar = true;
      });

    this.portfolioData
      .getData(`${this.baseUrl}/proyectos/listar`)
      .subscribe((data) => {
        this.proyectosData = data;
      });
  }

  ngOnInit() {
    this.getData();
    this.portfolioData.getRefresh().subscribe((value: boolean) => {
      if (value) {
        this.reloadPersona();
      }
    });
    personaID = this.tokenStorage.getUser().id;
    console.log("Persona ID", personaID)
  }

}
