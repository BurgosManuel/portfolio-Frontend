import { Component, OnInit } from '@angular/core';
import { ItemsSection, Section } from 'src/app/classes/section';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  // Sobrescribimos la url de la descripcion.
  url: string = 'http://localhost:5000/skills';

  // Generamos un array de urls, para cada parte de las habilidades (front, back y soft).
  urlList: string[] = [
    'http://localhost:5000/frontend',
    'http://localhost:5000/backend',
    'http://localhost:5000/soft',
  ];

  // Generamos un array de arrays, que contendrá la información de cada una de las habilidades.
  skillsList: any[] = [];

  sectionData: any;
  isEditing: boolean = false;

  constructor(private portfolioData: PortfolioDataService) {}

  toggleEdition(editingState: boolean): void {
    this.isEditing = editingState;
  }

  ngOnInit(): void {
    // Obtenemos los datos de las habilidades a través del servicio realizando iteraciones, por cada URL se pushea un elemento al skillsList.
    for (let url of this.urlList) {
      this.portfolioData.getData(url).subscribe((data) => {
        this.skillsList.push(data);
      });
    }

    this.portfolioData
      .getData(this.url)
      .subscribe((data) => (this.sectionData = data.description));
  }
}
