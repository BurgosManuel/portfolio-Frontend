import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent {
  @Output() onToggleEdition: EventEmitter<any> = new EventEmitter();
  @Output() onSave: EventEmitter<any> = new EventEmitter();
  @Input() editableData = {
    id: 1,
    title: '',
    description: '',
    img: '',
    live: '',
    repo: '',
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
