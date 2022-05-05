import { Component, OnInit } from '@angular/core';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';
import { Section } from 'src/section';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent extends Section {
  // Sobrescribimos la url de la descripcion.
  override url: string = 'http://localhost:5000/skills';

  // Generamos un array de urls, para cada parte de las habilidades (front, back y soft).
  urlList: string[] = [
    'http://localhost:5000/frontend',
    'http://localhost:5000/backend',
    'http://localhost:5000/soft',
  ];
  // Generamos un array de arrays, que contendrá la información de cada una de las habilidades.
  dataList: any[] = [];

  override ngOnInit(): void {
    // Obtenemos los datos de las habilidades a través del servicio realizando iteraciones, por cada URL se pushea un elemento al dataList.
    for (let url of this.urlList) {
      this.portfolioData.getData(url).subscribe((data) => {
        this.dataList.push(data);
      });
    }
    // Al sobrescribir la lógica del ngOnInit, debemos reasignar los datos de la seccion.
    this.portfolioData
      .getData(this.url)
      .subscribe((data) => (this.sectionData = data.description));
  }
}
