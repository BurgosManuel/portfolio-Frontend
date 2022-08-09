import { Component, Input, OnInit } from '@angular/core';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';
import { Educacion } from 'src/app/model/Educacion';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent {
  @Input() educacionData?: Educacion[];
  isEditing: boolean = false;
  isAdding: boolean = false;
  baseUrl: string = environment.baseUrl;

  // Inyectamos el servicio utilizando el modificador 'Protected', de manera que las instancias de esta clase puedan acceder al servicio.
  constructor(private portfolioData: PortfolioDataService) {}

  // Método que cambia el estado del booleano, esto nos servirá para pasar del "modo edicion" al "modo visualizar".
  toggleEdition(editingState: boolean): void {
    this.isEditing = editingState;
  }

  toggleAdding(addingState: boolean): void {
    this.isAdding = addingState;
  }

  reloadData() {
    setTimeout(() => {
      this.portfolioData
        .getData(`${this.baseUrl}/educacion/listar`)
        .subscribe((data) => {
          this.educacionData = data;
        });
    }, 500);
  }

  deleteItem(educacionItem: Educacion, index: number): void {
    const url = `http://localhost:8080/educacion/eliminar/${educacionItem.id}`;
    this.educacionData?.splice(index, 1);
    this.portfolioData.deleteData(url, educacionItem).subscribe();
  }
}
