import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-edit-component',
  templateUrl: './edit-component.component.html',
  styleUrls: ['./edit-component.component.css'],
})
export class EditComponentComponent implements OnInit {
  @Input() editableData: string = 'Test';
  ngOnInit(): void {}
}
