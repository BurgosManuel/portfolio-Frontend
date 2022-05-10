import { Component, Input, EventEmitter, Output } from '@angular/core';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css'],
})
export class ProjectItemComponent {
  @Input() url: any;
  @Input() index: number = 0;
  @Input() projectItem = {
    id: 1,
    title: '',
    description: '',
    img: '',
    live: '',
    repo: '',
  };

  @Output() onItemUpdate: EventEmitter<any> = new EventEmitter();
  @Output() onItemDelete: EventEmitter<any> = new EventEmitter();
  isEditing: boolean = false;

  constructor(private portfolioData: PortfolioDataService) {}

  onDelete() {
    this.onItemDelete.emit(this.projectItem);
  }

  // Método que cambia el estado del booleano, esto nos servirá para pasar del "modo edicion" al "modo visualizar".
  toggleEdition(editingState: boolean): void {
    this.isEditing = editingState;
  }

  updateItem(updatedItem: any) {
    this.projectItem = updatedItem;
    this.onItemUpdate.emit(this.updateItem);
    this.portfolioData.updateItem(this.url, updatedItem).subscribe();
  }
}
