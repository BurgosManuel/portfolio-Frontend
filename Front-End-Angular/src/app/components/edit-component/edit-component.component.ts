import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-edit-component',
  templateUrl: './edit-component.component.html',
  styleUrls: ['./edit-component.component.css'],
})
export class EditComponentComponent implements OnInit {
  @Input() editableData: string = 'Test';
  @Output() onSaveData: EventEmitter<any> = new EventEmitter();

  saveChange(): void {
    this.onSaveData.emit(this.editableData);
  }
  ngOnInit(): void {}
}
