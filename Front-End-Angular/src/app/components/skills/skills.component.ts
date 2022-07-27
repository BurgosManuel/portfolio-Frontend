import { Component, Input, OnInit } from '@angular/core';
import { ItemsSection, Section } from 'src/app/classes/section';
import { Seccion } from 'src/app/model/Seccion';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  @Input() seccionData?: Seccion;

  // Generamos un array de urls, para cada parte de las habilidades (front, back y soft).
  urlList: string[] = [
    'http://localhost:5000/frontend',
    'http://localhost:5000/backend',
    'http://localhost:5000/soft',
  ];

  // Generamos un array de arrays, que contendrá la información de cada una de las habilidades.
  skillsList: any[] = [];
  isEditing: boolean = false;

  constructor(private portfolioData: PortfolioDataService) {}

  toggleEdition(editingState: boolean): void {
    this.isEditing = editingState;
  }

    // Método que utilizamos para guardar cambios, el mismo actualiza los datos de la propiedad 'sectionData' y llama al método del servicio que se encarga de actualizar los datos en el JSON.
    updateSeccion(newData: Seccion): void {
      const url = `http://localhost:8080/secciones/editar/${this.seccionData?.id}`;
      this.seccionData = newData;
      this.portfolioData.updateData(url, newData).subscribe();
      console.log('Nuevos datos Skills:', newData);
    }

  ngOnInit(): void {
    // Obtenemos los datos de las habilidades a través del servicio realizando iteraciones, por cada URL se pushea un elemento al skillsList.
    for (let url of this.urlList) {
      this.portfolioData.getData(url).subscribe((data) => {
        this.skillsList.push(data);
      });
    }
  }
}
