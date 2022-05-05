import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-professional-item',
  templateUrl: './professional-item.component.html',
  styleUrls: ['./professional-item.component.css'],
})
export class ProfessionalItemComponent implements OnInit {
  @Input() professionalData: any
  constructor() {}

  ngOnInit(): void {}
}
