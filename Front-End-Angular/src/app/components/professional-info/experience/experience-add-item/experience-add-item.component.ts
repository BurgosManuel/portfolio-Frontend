import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Experiencia } from 'src/app/model/Experiencia';

@Component({
  selector: 'app-experience-add-item',
  templateUrl: './experience-add-item.component.html',
  styleUrls: ['./experience-add-item.component.css'],
})
export class ExperienceAddItemComponent  {
  @Input() isAdding: boolean = false;
  @Input() experienciaList?: Experiencia[];
  @Output() onToggleAdding: EventEmitter<any> = new EventEmitter();
  @Output() onAddItem: EventEmitter<any> = new EventEmitter();
  experienciaItem: Experiencia = new Experiencia(0, 1, "", "", "", "");

  toggleAdding(): void {
    this.onToggleAdding.emit();
  }

  addItem() {
    this.experienciaList?.push(this.experienciaItem);
    this.onAddItem.emit(this.experienciaItem);
  }
}
