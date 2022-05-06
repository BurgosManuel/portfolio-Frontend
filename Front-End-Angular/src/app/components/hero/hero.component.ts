import { Component } from '@angular/core';
import { Section } from 'src/app/classes/section';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent extends Section {
  // Sobrescribimos la url de la Clase Section.
  override url: string = 'http://localhost:5000/hero';

  // Método que nos mostrará los elementos cuando la ventana carga a través del (window:load).
  showTitle(el: HTMLElement) {
    el.classList.remove('hideText', 'opacity-0');
  }

  // Sobrescribimos los datos que recibimos de la url, de manera que obtengamos el objeto completo.
  override ngOnInit(): void {
    this.portfolioData
    .getData(this.url)
    .subscribe((data) => (this.sectionData = data));
  }
}
