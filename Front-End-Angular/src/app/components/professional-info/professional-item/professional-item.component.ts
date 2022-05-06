import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-professional-item',
  templateUrl: './professional-item.component.html',
  styleUrls: ['./professional-item.component.css'],
})
export class ProfessionalItemComponent implements OnInit {
  @Input() professionalData: any;
  @Output() onItemDelete: EventEmitter<any> = new EventEmitter();
  constructor() {}

  onDelete(item: any, index: number) {
    this.professionalData.splice(index, 1);
    this.onItemDelete.emit(item);
  }

  ngOnInit(): void {}
}
