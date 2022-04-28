import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  // Creamos una propiedad que almacene el min-width para que se considere la sidebar 'Abierta'
  minWidth = window.matchMedia('(min-width: 1200px)');
  // Booleano que nos muestra si la barra esta abierta o cerrada.
  isOpen: boolean;

  constructor() {
    // Determinamos si el sidebar -al instanciarse- estará abierto o cerrado.
    this.minWidth.matches ? (this.isOpen = true) : (this.isOpen = false);
  }

  // Método para modificar el estado del sidebar (usaremos el booleano con la directiva ngClass para agregar/quitar la clase 'hidebar'). Será bindeado al evento personalizado (onToggleButton)
  toggleSidebar(sidebar: HTMLElement): void {
    this.isOpen = !this.isOpen;
  }

  // Método que va a checkear el tamaño de la pantalla y modificar el estado de 'isOpen' en base a esto. Será bindeado a través del evento (window: resize), para que se ejecute cada vez que cambia el tamaño de la ventana.
  loadSidebar() {
    this.minWidth.matches ? (this.isOpen = true) : (this.isOpen = false);
  }

  ngOnInit(): void {}
}
