import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ProfessionalItem } from 'src/app/classes/items';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.css'],
})
export class AddButtonComponent{
  @Input() isAdding: boolean = false;
  @Input() itemsList: ProfessionalItem[] = [];
  @Output() onToggleAdding: EventEmitter<any> = new EventEmitter();
  constructor() {}

  toggleAdding(): void {
    this.isAdding = !this.isAdding
    this.onToggleAdding.emit(this.isAdding);
  }
  
  reload(): void {
    if (!this.isAdding) {
      window.location.reload();
    }
  }
}
