import { Directive, OnInit } from '@angular/core';
import { PortfolioDataService } from './app/services/portfolio-data.service';

@Directive()
export class Section implements OnInit {
  // Creamos las clase Section, para evitar repetir lógica en las distintas secciones del sitio.
  url: string = '';
  sectionData: any;
  isEditing: boolean = false;

  // Inyectamos el servicio utilizando el modificador 'Protected', de manera que las instancias de esta clase puedan acceder al servicio.
  constructor(protected portfolioData: PortfolioDataService) {}

  // Método que cambia el estado del booleano, esto nos servirá para pasar del "modo edicion" al "modo visualizar".
  toggleEdition(editingState: boolean): void {
    this.isEditing = editingState;
  }

  // Método que utilizamos para guardar cambios, el mismo actualiza los datos de la propiedad 'sectionData' y llama al método del servicio que se encarga de actualizar los datos en el JSON.
  saveChanges(newData: any): void {
    this.sectionData = newData;
    this.portfolioData.updateSection(this.url, newData).subscribe();
  }

  // Declaramos que al instanciar esta Clase, la propiedad 'SectionData' tomará como valor los datos obtenidos a través del servicio.
  ngOnInit(): void {
    this.portfolioData.getData(this.url).subscribe((data) => {
      this.sectionData = data.description;
    });
  }
}

// Esta interfaz nos sirve para brindarle estructura al objeto que retornemos a través del servicio.
export interface ISection {
  description: string;
}
