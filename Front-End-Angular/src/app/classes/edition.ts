import { Directive, Input, Output, EventEmitter } from "@angular/core";

@Directive()
export class Edition {
  @Input() editableData: any;
  @Output() onToggleEdition: EventEmitter<any> = new EventEmitter();
  @Output() onSave: EventEmitter<any> = new EventEmitter();

  toggleEdition(): void {
    this.onToggleEdition.emit();
  }

  saveChanges(): void {
    this.onSave.emit(this.editableData);
  }

  reload(): void {
    window.location.reload();
  }
}