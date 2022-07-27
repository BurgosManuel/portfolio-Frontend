import { Component, Input } from '@angular/core';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';
import { Experiencia } from 'src/app/model/Experiencia';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent {
  @Input() experienciaData?: Experiencia[];
  isEditing: boolean = false;
  isAdding: boolean = false;

  // Inyectamos el servicio utilizando el modificador 'Protected', de manera que las instancias de esta clase puedan acceder al servicio.
  constructor(private portfolioData: PortfolioDataService) {}

  // Método que cambia el estado del booleano, esto nos servirá para pasar del "modo edicion" al "modo visualizar".
  toggleEdition(editingState: boolean): void {
    this.isEditing = editingState;
  }

  toggleAdding(addingState: boolean): void {
    this.isAdding = addingState;
  }

  addItem(experienciaItem: Experiencia) {
    const url = 'http://localhost:8080/experiencia/agregar'
    this.portfolioData.createData(url, experienciaItem).subscribe();
    console.log("Experiencia Agregar: ", experienciaItem)
  }

  deleteItem(experienciaItem: Experiencia, index: number): void {
    const url = `http://localhost:8080/experiencia/eliminar/${experienciaItem.id}`
    this.experienciaData?.splice(index, 1);
    this.portfolioData.deleteData(url, experienciaItem).subscribe();
    console.log('Experiencia a eliminar: ', experienciaItem)
  }
}
