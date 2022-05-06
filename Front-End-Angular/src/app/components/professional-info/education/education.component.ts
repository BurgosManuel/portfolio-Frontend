import { Component } from '@angular/core';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';
import { ItemsSection } from 'src/app/classes/section';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent extends ItemsSection {
  // Sobrescribimos la url de la descripcion
  override url: string = 'http://localhost:5000/education';
}
