import { Component, Input, OnInit } from '@angular/core';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';
import { ItemsSection } from 'src/app/classes/section';
import { Educacion } from 'src/app/model/Educacion';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent {
  @Input() educacionData?: Educacion[];
  isEditing: boolean = false;
  isAdding: boolean = false;

  // Inyectamos el servicio utilizando el modificador 'Protected', de manera que las instancias de esta clase puedan acceder al servicio.
  constructor(private portfolioData: PortfolioDataService) {}

  // Método que cambia el estado del booleano, esto nos servirá para pasar del "modo edicion" al "modo visualizar".
  toggleEdition(editingState: boolean): void {
    this.isEditing = editingState;
  }

  toggleAdding(addingState: boolean): void {
    this.isAdding = addingState;
  }

  addItem(educacionItem: Educacion) {
    const url = 'http://localhost:8080/educacion/agregar'
    this.portfolioData.createData(url, educacionItem).subscribe();
    console.log("Educacion Agregar: ", educacionItem)
  }

  deleteItem(educacionItem: Educacion, index: number): void {
    const url = `http://localhost:8080/educacion/eliminar/${educacionItem.id}`
    this.educacionData?.splice(index, 1);
    this.portfolioData.deleteData(url, educacionItem).subscribe();
    console.log('Educacion a eliminar: ', educacionItem)
  }
}
