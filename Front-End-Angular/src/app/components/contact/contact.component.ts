import { Component, Input } from '@angular/core';
import { Section } from 'src/app/classes/section';
import { Seccion } from 'src/app/model/Seccion';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  @Input() seccionData?: Seccion;
  isEditing: boolean = false;

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
}
