import { Component, Input } from '@angular/core';
import { Persona } from 'src/app/model/Persona';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  @Input() personaData?: Persona;
  isEditing: boolean = false;
  baseUrl: string = environment.baseUrl;

  // Inyectamos el servicio utilizando el modificador 'Protected', de manera que las instancias de esta clase puedan acceder al servicio.
  constructor(protected portfolioData: PortfolioDataService) {}

  // Método que cambia el estado del booleano, esto nos servirá para pasar del "modo edicion" al "modo visualizar".
  toggleEdition(editingState: boolean): void {
    this.isEditing = editingState;
  }

  // Método que utilizamos para guardar cambios, el mismo actualiza los datos de la propiedad 'sectionData' y llama al método del servicio que se encarga de actualizar los datos en el JSON.
  actualizarPersona(personaActualizada: Persona): void {
    const url: string = `${this.baseUrl}/personas/editar/${personaActualizada.id}`;
    this.personaData = personaActualizada;
    this.portfolioData.updateData(url, personaActualizada).subscribe();
    console.log('Persona Actualizada: ', personaActualizada, url);
  }

  // Creamos una propiedad que almacene el min-width para que se considere la sidebar 'Abierta'
  minWidth = window.matchMedia('(min-width: 1200px)');
  // Booleano que nos muestra si la barra esta abierta o cerrada.
  isOpen: boolean = true;

  // Método para modificar el estado del sidebar (usaremos el booleano con la directiva ngClass para agregar/quitar la clase 'hidebar'). Será bindeado al evento personalizado (onToggleButton)
  toggleSidebar(sidebar: HTMLElement): void {
    this.isOpen = !this.isOpen;
  }

  // Método que va a checkear el tamaño de la pantalla y modificar el estado de 'isOpen' en base a esto. Será bindeado a través del evento (window: resize), para que se ejecute cada vez que cambia el tamaño de la ventana.
  loadSidebar() {
    this.minWidth.matches ? (this.isOpen = true) : (this.isOpen = false);
  }

  // updateItem(updatedItem: any) {
  //   this.sectionData = updatedItem;
  //   this.portfolioData.updateItem(this.url, updatedItem).subscribe();
  // }

  // reload(): void {
  //   if (!this.isEditing) {
  //     window.location.reload();
  //   }
  // }

  ngOnInit(): void {
    // Determinamos si el sidebar -al instanciarse- estará abierto o cerrado.
    this.minWidth.matches ? (this.isOpen = true) : (this.isOpen = false);
  }
}
