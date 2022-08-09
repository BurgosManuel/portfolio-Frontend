import { Component, Input } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Persona } from 'src/app/model/Persona';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  @Input() personaData?: Persona;

  // Método que nos mostrará los elementos cuando la ventana carga a través del (window:load).
  showTitle() {
    const el = document.querySelector('#heroText');
    el?.classList.remove('hideText', 'opacity-0');
  }

  ngOnInit() {
    setTimeout(this.showTitle, 200);
  }
}
