import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Educacion } from 'src/app/model/Educacion';

@Component({
  selector: 'app-education-add-item',
  templateUrl: './education-add-item.component.html',
  styleUrls: ['./education-add-item.component.css'],
})
export class EducationAddItem  {
  @Input() isAdding: boolean = false;
  @Input() educacionList?: Educacion[];
  @Output() onToggleAdding: EventEmitter<any> = new EventEmitter();
  @Output() onAddItem: EventEmitter<any> = new EventEmitter();
  educacionItem: Educacion = new Educacion(0, 1, "", "", "", "");

  toggleAdding(): void {
    this.onToggleAdding.emit();
  }

  addItem() {
    this.educacionList?.push(this.educacionItem!);
    this.onAddItem.emit(this.educacionItem);
  }
}
