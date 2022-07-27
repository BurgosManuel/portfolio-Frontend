import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Persona } from 'src/app/model/Persona';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';

@Component({
  selector: 'app-navbar-item',
  templateUrl: './navbar-item.component.html',
  styleUrls: ['./navbar-item.component.css'],
})
export class NavbarItemComponent {
  @Input() url: any;
  @Input() isEditing: boolean = false;
  @Input() personaItem?: Persona;

  @Output() onItemUpdate: EventEmitter<any> = new EventEmitter();

  constructor(private portfolioData: PortfolioDataService) {}
  // Método que cambia el estado del booleano, esto nos servirá para pasar del "modo edicion" al "modo visualizar".
  toggleEdition(editingState: boolean): void {
    this.isEditing = editingState;
  }

  updatePersona(updatedItem: Persona) {
    this.personaItem = updatedItem;
    this.onItemUpdate.emit(updatedItem);
  }
}
