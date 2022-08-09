import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Persona } from 'src/app/model/Persona';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';
import { UserService } from 'src/app/services/user.service';
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
  @Output() onToggleItem: EventEmitter<any> = new EventEmitter();
  @Output() onItemUpdate: EventEmitter<any> = new EventEmitter();
  baseUrl: string = environment.baseUrl;
  isUserLogged: boolean = false;

  constructor(private portfolioData: PortfolioDataService, private userStatus: UserService) {}
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

  navigateToSection(section : string) {
    window.location.hash = '';
    window.location.hash = section;
    console.log("SECTION: ", section)
    console.log("WINDOW LOCATION HASH: ", window.location.hash);
  }

  ngOnInit() {
    this.userStatus.getUserStatus().subscribe(value => this.isUserLogged = value);
  }
}
