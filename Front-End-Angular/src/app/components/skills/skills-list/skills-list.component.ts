import { Component, Input, OnInit } from '@angular/core';
import { Habilidad } from 'src/app/model/Habilidad';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.css'],
})
export class SkillsListComponent {
  @Input() habilidadesList?: Habilidad[];
  @Input() habilidadesTitulo?: string;
  @Input() habilidadTipo?: string;
  @Input() barColor: string = 'bg-primary';
  isAdding: boolean = false;
  baseUrl: string = environment.baseUrl;

  constructor(private portfolioData: PortfolioDataService) {}

  toggleAdding(addingState: boolean): void {
    this.isAdding = addingState;
  }

  addItem(habilidadItem: Habilidad) {
    const url = `${this.baseUrl}/habilidades/agregar`;
    this.portfolioData.createData(url, habilidadItem).subscribe();
  }

  deleteItem(habilidadItem: Habilidad, index: number): void {
    // Eliminamos en front
    this.habilidadesList?.splice(index, 1);
    // Eliminamos en back
    const url = `${this.baseUrl}/habilidades/eliminar/${habilidadItem.id}`;
    this.portfolioData.deleteData(url, habilidadItem).subscribe();
  }

  ngOnInit() {
  }
}
