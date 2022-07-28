import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Proyecto } from 'src/app/model/Proyecto';

@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.css'],
})
export class ProjectAddComponent {
  @Input() isAdding: boolean = false;
  @Input() proyectosList: Proyecto[] = [];
  proyectoItem: Proyecto = new Proyecto(0, 1, '', '', '', '', '');
  @Output() onToggleAdding: EventEmitter<any> = new EventEmitter();
  @Output() onAddItem: EventEmitter<any> = new EventEmitter();

  toggleAdding(): void {
    this.onToggleAdding.emit();
  }

  addItem() {
    this.proyectosList.push(this.proyectoItem);
    this.onAddItem.emit(this.proyectoItem);
  }
}
