import { Component, OnInit } from '@angular/core';
import { Section } from 'src/app/classes/section';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent extends Section {
  // Sobre-escribimos la URL para la descripcion, y creamos una nueva propiedad que contiene el Array de proyectos, así como la url de la misma.
  override url: string = 'http://localhost:5000/projects';
  listUrl: string = 'http://localhost:5000/projectsList';
  projectsList: any[] = [];

  // Asignamos el valor de la lista a la propiedad al momento de instanciarce, haciendo uso del servicio.
  override ngOnInit(): void {
    // Obtenemos los datos para el array de elementos (projectsList).
    this.portfolioData.getData(this.listUrl).subscribe((data) => {
      this.projectsList = data;
    });

    // Al sobrescribir la lógica del ngOnInit, debemos reasignar los datos de la seccion.
    this.portfolioData
      .getData(this.url)
      .subscribe((data) => (this.sectionData = data.description));
  }
}
