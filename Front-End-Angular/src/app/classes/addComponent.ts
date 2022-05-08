import { Directive, Input, EventEmitter, Output } from '@angular/core';

@Directive()
export class addComponent {
  @Input() isAdding: boolean = false;
  @Input() itemsList: any[] = [];
  @Output() onToggleAdding: EventEmitter<any> = new EventEmitter();
  @Output() onAddItem: EventEmitter<any> = new EventEmitter();
  sampleItem: any;

  toggleAdding(): void {
    this.onToggleAdding.emit();
  }

  addItem() {
    // Creamos un array que contendrá los IDs de los items.
    let idList: any[] = [];
    // Agregamos los IDs de la lista a nuestro array.
    this.itemsList.forEach((el) => idList.push(el.id));
    // Generamos una ID aleatoria
    let randomID = Math.ceil(Math.random() * 100 + 1);

    // Si el ID generado se encuentra dentro del Array de IDs, generamos uno nuevo.
    while (idList.some((id) => id === randomID)) {
      randomID = Math.ceil(Math.random() * 100 + 1);
    }

    // Asignamos la ID a nuestro item y lo sumamos la lista de items.
    this.sampleItem.id = randomID;
    this.itemsList.push(this.sampleItem);
    this.onAddItem.emit(this.sampleItem);
  }
}
