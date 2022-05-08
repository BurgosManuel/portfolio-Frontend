import { Directive, Input, Output, EventEmitter } from "@angular/core";

@Directive()
export class DeleteComponent {
    @Input() itemsList: any;
    @Output() onItemDelete: EventEmitter<any> = new EventEmitter();
  
    onDelete(item: any, index: number) {
      this.itemsList.splice(index, 1);
      this.onItemDelete.emit(item);
    }
}