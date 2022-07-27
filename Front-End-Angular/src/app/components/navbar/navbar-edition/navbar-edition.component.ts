import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Persona } from 'src/app/model/Persona';

@Component({
  selector: 'app-navbar-edition',
  templateUrl: './navbar-edition.component.html',
  styleUrls: ['./navbar-edition.component.css'],
})
export class NavbarEditionComponent {
  @Input() isEditing: boolean = false;
  @Output() onToggleEdition: EventEmitter<any> = new EventEmitter();
  @Output() onSave: EventEmitter<any> = new EventEmitter();
  @Input() personaEditable?: Persona;

  toggleEdition(): void {
    this.onToggleEdition.emit();
  }

  saveChanges(): void {
    this.onSave.emit(this.personaEditable);
    this.isEditing = false;
  }

  reload(): void {
    window.location.reload();
  }
}
