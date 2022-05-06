import { Component } from '@angular/core';
import { Section } from 'src/app/classes/section';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent extends Section {
    // Sobre-escribimos la url de la Clase Section, pero mantenemos el resto de lógica.
  override url: string = 'http://localhost:5000/contact';
}
