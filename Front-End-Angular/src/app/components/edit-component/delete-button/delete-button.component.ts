import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.css'],
})
export class DeleteButtonComponent {
  @Output() onItemDelete: EventEmitter<any> = new EventEmitter();

  onDelete() {
    this.onItemDelete.emit();
  }
}
