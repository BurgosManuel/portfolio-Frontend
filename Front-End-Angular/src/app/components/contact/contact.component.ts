import { Component, OnInit } from '@angular/core';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';
import { Section } from 'src/section';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent extends Section {
    // Sobre-escribimos la url de la Clase Section, pero mantenemos el resto de lógica.
  override url: string = 'http://localhost:5000/contact';
}
