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
  educacionItem?: Educacion;

  toggleAdding(): void {
    this.onToggleAdding.emit();
  }

  addItem() {
    // // Creamos un array que contendrá los IDs de los items.
    // let idList: any[] = [];
    // // Agregamos los IDs de la lista a nuestro array.
    // this.itemsList.forEach((el) => idList.push(el.id));
    // // Generamos una ID aleatoria
    // let randomID = Math.ceil(Math.random() * 100 + 1);

    // // Si el ID generado se encuentra dentro del Array de IDs, generamos uno nuevo.
    // while (idList.some((id) => id === randomID)) {
    //   randomID = Math.ceil(Math.random() * 100 + 1);
    // }

    // // Asignamos la ID a nuestro item y lo sumamos la lista de items.
    // this.itemInstance.id = randomID;
    // this.itemsList.push(this.itemInstance);
    // this.onAddItem.emit(this.itemInstance);
  }
}
