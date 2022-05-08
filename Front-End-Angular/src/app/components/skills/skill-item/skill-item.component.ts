import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ItemsSection } from 'src/app/classes/section';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.css'],
})
export class SkillItemComponent {
  isEditing: boolean = false;
  @Input() url: any;
  @Input() urlList: any[] = [];
  @Input() skillsArray: any[] = [];
  @Input() skillsTitle: string = 'Example';
  @Input() barColor: string = 'bg-primary';
  @Input() skillItem = {
    id: 1,
    skill: 'HTML',
    icon: 'fa-brands fa-html5',
    lvl: 'Avanzado',
    progress: '80',
  };

  @Output() onItemUpdate: EventEmitter<any> = new EventEmitter();
  @Output() onItemDelete: EventEmitter<any> = new EventEmitter();

  constructor(private portfolioData: PortfolioDataService) {}

  onDelete() {
    this.onItemDelete.emit(this.skillItem);
  }

  // Método que cambia el estado del booleano, esto nos servirá para pasar del "modo edicion" al "modo visualizar".
  toggleEdition(editingState: boolean): void {
    this.isEditing = editingState;
  }

  updateItem(updatedItem: any) {
    this.skillItem = updatedItem;
    this.onItemUpdate.emit(this.updateItem);
    this.portfolioData.updateItem(this.url, updatedItem).subscribe();
  }
}
