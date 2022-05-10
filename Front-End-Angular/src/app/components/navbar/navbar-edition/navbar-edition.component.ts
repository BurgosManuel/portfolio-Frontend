import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar-edition',
  templateUrl: './navbar-edition.component.html',
  styleUrls: ['./navbar-edition.component.css'],
})
export class NavbarEditionComponent {
  @Input() isEditing: boolean = false;
  @Output() onToggleEdition: EventEmitter<any> = new EventEmitter();
  @Output() onSave: EventEmitter<any> = new EventEmitter();
  @Input() editableData = {
    name: '',
    profilepic: '',
    linkedin: '',
    github: '',
  };

  toggleEdition(): void {
    this.onToggleEdition.emit();
  }

  saveChanges(): void {
    this.onSave.emit(this.editableData);
  }

  reload(): void {
    window.location.reload();
  }
}
