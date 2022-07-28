import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Edition } from 'src/app/classes/edition';
import { SkillItem } from 'src/app/classes/items';
import { Habilidad } from 'src/app/model/Habilidad';

@Component({
  selector: 'app-skill-edit',
  templateUrl: './skill-edit.component.html',
  styleUrls: ['./skill-edit.component.css'],
})
export class SkillEditComponent {
  @Output() onToggleEdition: EventEmitter<any> = new EventEmitter();
  @Output() onSave: EventEmitter<any> = new EventEmitter();
  @Input() habilidadEditable?: Habilidad;

  toggleEdition(): void {
    this.onToggleEdition.emit();
  }

  saveChanges(): void {
    this.onSave.emit(this.habilidadEditable);
  }

  reload(): void {
    window.location.reload();
  }
}
