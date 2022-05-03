import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-edit-component',
  templateUrl: './edit-component.component.html',
  styleUrls: ['./edit-component.component.css'],
})
export class EditComponentComponent implements OnInit {
  @Input() editableData: string = 'Test';
  @Output() onToggleEdition: EventEmitter<any> = new EventEmitter();
  @Output() onSave: EventEmitter<any> = new EventEmitter();

  toggleEdition(): void {
    this.onToggleEdition.emit();
  }

  saveChanges(): void {
    this.onSave.emit(this.editableData);
  }

  ngOnInit(): void {}
}
