import { Component, OnInit } from '@angular/core';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';
import { Section } from 'src/section';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent extends Section {
  // Sobrescribimos la URL para la descripcion, y creamos una nueva propiedad que contiene el Array de proyectos, así como la url de la misma.
  override url: string = 'http://localhost:5000/projects';
  listUrl: string = 'http://localhost:5000/projectsList';
  projectsList: any;

  // Asignamos el valor de la lista a la propiedad al momento de instanciarce, haciendo uso del servicio.
  override ngOnInit(): void {
    this.portfolioData.getData(this.listUrl).subscribe((data) => {
      this.projectsList = data;
    });
  }
}
