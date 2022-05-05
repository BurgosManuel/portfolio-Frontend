import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Edition } from 'src/section';

@Component({
  selector: 'app-edit-component',
  templateUrl: './edit-component.component.html',
  styleUrls: ['./edit-component.component.css'],
})
export class EditComponentComponent extends Edition {

}
