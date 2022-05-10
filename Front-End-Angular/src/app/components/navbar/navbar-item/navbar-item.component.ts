import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';

@Component({
  selector: 'app-navbar-item',
  templateUrl: './navbar-item.component.html',
  styleUrls: ['./navbar-item.component.css'],
})
export class NavbarItemComponent {
  @Input() url: any;
  @Input() isEditing: boolean = false;
  @Input() navbarItem = {
    name: '',
    profilepic: '',
    linkedin: '',
    github: '',
  };

  @Output() onItemUpdate: EventEmitter<any> = new EventEmitter();

  constructor(private portfolioData: PortfolioDataService) {}
  // Método que cambia el estado del booleano, esto nos servirá para pasar del "modo edicion" al "modo visualizar".
  toggleEdition(editingState: boolean): void {
    this.isEditing = editingState;
  }

  updateItem(updatedItem: any) {
    this.navbarItem = updatedItem;
    this.onItemUpdate.emit(updatedItem);
  }
}
