import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.css'],
})
export class ToggleButtonComponent implements OnInit {

  @Output() onToggleButton: EventEmitter<any> = new EventEmitter;
  showSidebar: boolean = true;
  constructor() {}

  toggleSidebar() {
    this.showSidebar = !this.showSidebar
    this.onToggleButton.emit(this.showSidebar)
  }
  ngOnInit(): void {}
}
