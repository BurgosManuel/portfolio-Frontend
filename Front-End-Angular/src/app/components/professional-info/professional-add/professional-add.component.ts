import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/app/classes/items';

@Component({
  selector: 'app-professional-add',
  templateUrl: './professional-add.component.html',
  styleUrls: ['./professional-add.component.css'],
})
export class ProfessionalAddComponent implements OnInit {
  @Input() isAdding: boolean = false;
  @Input() itemsList: Item[] = [];
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

  ngOnInit(): void {}
}
