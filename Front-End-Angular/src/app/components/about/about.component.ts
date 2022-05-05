import { Component, OnInit } from '@angular/core';
import { Section } from 'src/section';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent extends Section {
  // Sobrescribimos la url de la Clase Section, pero mantenemos el resto de lógica.
  override url = 'http://localhost:5000/about';
}
