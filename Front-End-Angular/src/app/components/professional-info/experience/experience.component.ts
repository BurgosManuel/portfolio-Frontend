import { Component, OnInit} from '@angular/core';
import { ItemsSection} from 'src/app/classes/section';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
    // Sobrescribimos la url de la descripcion
    url: string = 'http://localhost:5000/experience';
    sectionData: any;
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
  
    addItem(item: any) {
      this.portfolioData.addItem(this.url, item).subscribe();
    }
  
    deleteItem(item: any, index: number): void {
      this.sectionData.splice(index, 1);
      this.portfolioData.deleteItem(this.url, item).subscribe();
    }
  
    // Declaramos que al instanciar esta Clase, la propiedad 'SectionFData' tomará como valor los datos obtenidos a través del servicio.
    ngOnInit(): void {
      this.portfolioData.getData(this.url).subscribe((data) => {
        this.sectionData = data;
      });
    }
}
