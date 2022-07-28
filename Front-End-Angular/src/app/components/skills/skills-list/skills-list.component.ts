import { Component, Input, OnInit } from '@angular/core';
import { ItemsSection } from 'src/app/classes/section';
import { Habilidad } from 'src/app/model/Habilidad';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';

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

  constructor(private portfolioData: PortfolioDataService) {}

  toggleAdding(addingState: boolean): void {
    this.isAdding = addingState;
  }

  addItem(habilidadItem: Habilidad) {
    const url = 'http://localhost:8080/habilidades/agregar';
    this.portfolioData.createData(url, habilidadItem).subscribe();
    console.log("Agregar Habilidad: ", habilidadItem)
  }

  deleteItem(habilidadItem: Habilidad, index: number): void {
    const url = `http://localhost:8080/habilidades/eliminar/${habilidadItem.id}`;
    this.habilidadesList?.splice(index, 1);
    this.portfolioData.deleteData(url, habilidadItem).subscribe();
    console.log('Habilidad a eliminar: ', habilidadItem);
  }

  ngOnInit(){
    console.log('skill list tipo', this.habilidadTipo)
  }
}
