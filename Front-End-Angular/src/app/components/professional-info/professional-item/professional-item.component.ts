import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItemsSection, Section } from 'src/app/classes/section';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';

@Component({
  selector: 'app-professional-item',
  templateUrl: './professional-item.component.html',
  styleUrls: ['./professional-item.component.css'],
})
export class ProfessionalItemComponent {
  @Input() url: any;
  @Input() professionalItem: any;
  @Output() onItemDelete: EventEmitter<any> = new EventEmitter();
  @Output() onItemUpdate: EventEmitter<any> = new EventEmitter();
  isEditing: boolean = false;
  
  constructor(private portfolioData: PortfolioDataService) {}
  onDelete() {
    this.onItemDelete.emit(this.professionalItem);
  }

  // Método que cambia el estado del booleano, esto nos servirá para pasar del "modo edicion" al "modo visualizar".
  toggleEdition(editingState: boolean): void {
    this.isEditing = editingState;
  }

  updateItem(updatedItem: any) {
    this.professionalItem = updatedItem;
    this.onItemUpdate.emit(this.updateItem);
    this.portfolioData.updateItem(this.url, updatedItem).subscribe();
  }
}
