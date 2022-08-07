import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Proyecto } from 'src/app/model/Proyecto';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';
import { environment } from 'src/environments/environment';
import { personaID } from '../../portfolio/portfolio.component';

@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.css'],
})
export class ProjectAddComponent {
  @Input() isAdding: boolean = false;
  @Input() proyectosList: Proyecto[] = [];
  proyectoItem: Proyecto = new Proyecto(personaID, '', '', '', '', '');
  @Output() onToggleAdding: EventEmitter<any> = new EventEmitter();
  @Output() onAddItem: EventEmitter<any> = new EventEmitter();
  baseUrl: string = environment.baseUrl;


  constructor(private portfolioData: PortfolioDataService){}

  toggleAdding(): void {
    this.onToggleAdding.emit();
  }

  addItem() {
    this.proyectosList?.push(this.proyectoItem!);
    const url = `${this.baseUrl}/proyectos/agregar`
    this.portfolioData.createData(url, this.proyectoItem).subscribe();
    console.log("ADD PROYECTO: ", this.proyectoItem)
    this.onAddItem.emit();
  }
}
