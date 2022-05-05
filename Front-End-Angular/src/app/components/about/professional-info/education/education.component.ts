import { Component } from '@angular/core';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';
import { Section } from 'src/section';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent extends Section {
  // Sobrescribimos la url de la descripcion
  override url: string = 'http://localhost:5000/education';

  // Re-asignamos el valor de esta seccion a través del servicio, ya que necesitamos el array completo y no sólo una parte.
  override ngOnInit(): void {
    this.portfolioData.getData(this.url).subscribe((data) => {
      this.sectionData = data;
    });
  }
}
