import { Component, OnInit } from '@angular/core';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';
import { ItemsSection, Section } from 'src/section';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent extends ItemsSection {
  // Sobrescribimos la url de la descripcion
  override url: string = 'http://localhost:5000/experience';
}
