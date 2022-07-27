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

  addItem(item: any) {
    // this.portfolioData.addItem(this.url, item).subscribe();
  }

  deleteItem(item: any, index: number): void {
    // this.seccionData.splice(index, 1);
    // this.portfolioData.deleteItem(this.url, item).subscribe();
  }
}
