import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-button',
  templateUrl: './edit-button.component.html',
  styleUrls: ['./edit-button.component.css'],
})
export class EditButtonComponent implements OnInit {
  isEditing: boolean = false;
  @Output() onToggleEdition: EventEmitter<any> = new EventEmitter();
  @Output() onSave: EventEmitter<any> = new EventEmitter();
  constructor() {}

  toggleEdition() {
    this.isEditing = !this.isEditing;
    this.onToggleEdition.emit(this.isEditing);
  }

  saveChanges() {
    this.onSave.emit();
  }

  ngOnInit(): void {}
}
