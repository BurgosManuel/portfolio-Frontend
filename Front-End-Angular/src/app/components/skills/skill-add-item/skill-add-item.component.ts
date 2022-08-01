import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Habilidad } from 'src/app/model/Habilidad';

@Component({
  selector: 'app-skill-add-item',
  templateUrl: './skill-add-item.component.html',
  styleUrls: ['./skill-add-item.component.css'],
})
export class SkillAddItemComponent {
  @Input() isAdding: boolean = false;
  @Input() habilidadesList?: Habilidad[];
  @Input() habilidadTipo: string = '';
  habilidadItem: Habilidad = new Habilidad(
    0,
    1,
    '',
    '',
    '',
    50,
    'fa-brands fa-html5'
  );

  @Output() onToggleAdding: EventEmitter<any> = new EventEmitter();
  @Output() onAddItem: EventEmitter<any> = new EventEmitter();

  toggleAdding(): void {
    this.onToggleAdding.emit();
  }

  addItem() {
    this.habilidadesList?.push(this.habilidadItem);
    this.onAddItem.emit(this.habilidadItem);
  }

  ngOnInit() {
    this.habilidadItem.tipo = this.habilidadTipo;
    console.log('skill add tipo', this.habilidadTipo);
  }
}
