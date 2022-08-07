import { Component, Input, Output, EventEmitter } from '@angular/core';
declare let window: any;

@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.css'],
})
export class DeleteButtonComponent {
  @Output() deleteBtnEvent: EventEmitter<any> = new EventEmitter<any>();
  @Input() modalTarget: any;


  openModal() {
    const modal = new window.bootstrap.Modal(document.getElementById(this.modalTarget));
    modal.show();
  }

  onDelete() {
    this.deleteBtnEvent.emit();
  }

  ngOnInit() {
  }
}
