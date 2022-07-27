import { Component, Input, OnInit } from '@angular/core';
import { Seccion } from 'src/app/model/Seccion';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  // Sobrescribimos la url de la Clase Section, pero mantenemos el resto de lógica
  @Input() seccionData?: Seccion;
  @Input() imgUrl: any;
  isEditing: boolean = false;

  constructor(private portfolioData: PortfolioDataService) {}

  // Método que cambia el estado del booleano, esto nos servirá para pasar del "modo edicion" al "modo visualizar".
  toggleEdition(editingState: boolean): void {
    this.isEditing = editingState;
  }

  // Método que utilizamos para guardar cambios, el mismo actualiza los datos de la propiedad 'sectionData' y llama al método del servicio que se encarga de actualizar los datos en el JSON.
  saveChanges(newData: Seccion): void {
    const url = `http://localhost:8080/secciones/editar/${this.seccionData?.id}`;
    this.seccionData = newData;
    this.portfolioData.updateData(url, newData).subscribe();
    console.log('Nuevos datos About:', newData);
  }

  //Método para modificar la imagen, implementar más adelante.
  saveImg(newUrl: any) {
    this.imgUrl = newUrl;
    const aboutItem: any = {
      imgUrl: newUrl,
    };
    // this.portfolioData.updateItem(this.imgUrl, aboutItem).subscribe();
  }
}
