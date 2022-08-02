import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Persona } from 'src/app/model/Persona';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-navbar-item',
  templateUrl: './navbar-item.component.html',
  styleUrls: ['./navbar-item.component.css'],
})
export class NavbarItemComponent {
  @Input() url: any;
  @Input() isEditing: boolean = false;
  @Input() personaData?: Persona;
  baseUrl: string = environment.baseUrl;
  @Output() onToggleItem: EventEmitter<any> = new EventEmitter();

  @Output() onItemUpdate: EventEmitter<any> = new EventEmitter();

  constructor(private portfolioData: PortfolioDataService) {}
  // Método que cambia el estado del booleano, esto nos servirá para pasar del "modo edicion" al "modo visualizar".
  toggleEdition(editingState: boolean): void {
    this.isEditing = editingState;
    this.onToggleItem.emit(this.isEditing);
  }

  updatePersona(updatedItem: Persona) {
    this.personaData = updatedItem;
    this.onItemUpdate.emit(updatedItem);
  }

  reloadPersona() {
    this.portfolioData
      .getData(`${this.baseUrl}/personas/${this.personaData?.id}`)
      .subscribe((data) => {
        this.personaData = data;
        this.portfolioData.setRefresh(true);
      });
  }
}
