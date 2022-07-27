import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Experiencia } from 'src/app/model/Experiencia';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';

@Component({
  selector: 'app-experience-item',
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.css'],
})
export class ExperienceItemComponent {
  @Input() url: any;
  @Input() experienciaItem?: Experiencia;
  @Output() onItemDelete: EventEmitter<any> = new EventEmitter();
  @Output() onItemUpdate: EventEmitter<any> = new EventEmitter();
  isEditing: boolean = false;
  
  constructor(private portfolioData: PortfolioDataService) {}
  onDelete() {
    this.onItemDelete.emit(this.experienciaItem);
  }

  // Método que cambia el estado del booleano, esto nos servirá para pasar del "modo edicion" al "modo visualizar".
  toggleEdition(editingState: boolean): void {
    this.isEditing = editingState;
  }

  updateItem(updatedItem: Experiencia) {
    const url = `http://localhost:8080/experiencia/editar/${updatedItem.id}`;
    this.experienciaItem = updatedItem;
    this.onItemUpdate.emit(this.updateItem);
    this.portfolioData.updateData(url, updatedItem).subscribe();
    console.log('Updated Item Experiencia: ', updatedItem)
  }
}
