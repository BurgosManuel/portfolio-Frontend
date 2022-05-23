import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { Edition } from 'src/app/classes/edition';

@Component({
  selector: 'app-edit-component',
  templateUrl: './edit-component.component.html',
  styleUrls: ['./edit-component.component.css'],
})
export class EditComponentComponent implements OnInit {
  @Input() editableData: any;
  @Input() aboutImg: any;
  @Input() isEditing: boolean = false;
  @Output() onToggleEdition: EventEmitter<any> = new EventEmitter();
  @Output() onSave: EventEmitter<any> = new EventEmitter();
  @Output() onUpdateImg: EventEmitter<any> = new EventEmitter();

  toggleEdition(): void {
    this.onToggleEdition.emit(this.isEditing);
  }

  saveChanges(): void {
    this.onSave.emit(this.editableData);
    this.onUpdateImg.emit(this.aboutImg);
  }

  reload(): void {
    window.location.reload();
  }

  ngOnInit(): void {}
}
