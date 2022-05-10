import { Component } from '@angular/core';
import { Section } from 'src/app/classes/section';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  url: string = 'http://localhost:5000/hero';
  titleUrl: string = 'http://localhost:5000/nav';
  username: string = '';
  sectionData: any;

  // Inyectamos el servicio utilizando el modificador 'Protected', de manera que las instancias de esta clase puedan acceder al servicio.
  constructor(protected portfolioData: PortfolioDataService) {}

  // Método que nos mostrará los elementos cuando la ventana carga a través del (window:load).
  showTitle(el: HTMLElement) {
    el.classList.remove('hideText', 'opacity-0');
  }

  // Declaramos que al instanciar esta Clase, la propiedad 'SectionData' tomará como valor los datos obtenidos a través del servicio.
  ngOnInit(): void {
    this.portfolioData.getData(this.url).subscribe((data) => {
      this.sectionData = data;
    });

    this.portfolioData.getData(this.titleUrl).subscribe((data) => {
      this.username = data.name;
    });
  }
}
