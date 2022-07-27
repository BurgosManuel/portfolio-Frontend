import { Component, Input, OnInit } from '@angular/core';
import { Section } from 'src/app/classes/section';
import { Seccion } from 'src/app/model/Seccion';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  url: string = 'http://localhost:5000/projectsList';
  isEditing: boolean = false;
  isAdding: boolean = false;
  projectsList: any[] = [];
  @Input() seccionData?: Seccion;

  constructor(private portfolioData: PortfolioDataService) {}

  // Método que cambia el estado del booleano, esto nos servirá para pasar del "modo edicion" al "modo visualizar".
  toggleEdition(editingState: boolean): void {
    this.isEditing = editingState;
  }

   // Método que utilizamos para guardar cambios, el mismo actualiza los datos de la propiedad 'sectionData' y llama al método del servicio que se encarga de actualizar los datos en el JSON.
   updateSeccion(newData: Seccion): void {
    const url = `http://localhost:8080/secciones/editar/${this.seccionData?.id}`;
    this.seccionData = newData;
    this.portfolioData.updateData(url, newData).subscribe();
    console.log('Nuevos datos Proyectos:', newData);
  }

  toggleAdding(addingState: boolean): void {
    this.isAdding = addingState;
  }

  reloadToggle(editingState: boolean) {
    if (this.isEditing) {
      window.location.reload();
    }
    this.isEditing = editingState;
  }

  addItem(item: any) {
    this.portfolioData.addItem(this.url, item).subscribe();
  }

  deleteItem(item: any, index: number): void {
    this.projectsList.splice(index, 1);
    this.portfolioData.deleteItem(this.url, item).subscribe();
  }

  updateItems(itemsList: any): void {
    for (let item of itemsList) {
      let newUrl = this.url + `/${item.id}`;
      this.portfolioData.updateItem(newUrl, item).subscribe();
    }
  }

  // Asignamos el valor de la lista a la propiedad al momento de instanciarce, haciendo uso del servicio.
  ngOnInit(): void {

    // Obtenemos los datos para el array de elementos (projectsList).
    this.portfolioData.getData(this.url).subscribe((data) => {
      this.projectsList = data;
    });
  }
}
