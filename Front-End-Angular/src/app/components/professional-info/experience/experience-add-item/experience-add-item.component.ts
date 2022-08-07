import { Component, Input, Output, EventEmitter } from '@angular/core';
import { personaID } from 'src/app/components/portfolio/portfolio.component';
import { Experiencia } from 'src/app/model/Experiencia';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-experience-add-item',
  templateUrl: './experience-add-item.component.html',
  styleUrls: ['./experience-add-item.component.css'],
})
export class ExperienceAddItemComponent  {
  @Input() isAdding: boolean = false;
  @Input() experienciaList?: Experiencia[];
  @Output() onToggleAdding: EventEmitter<any> = new EventEmitter();
  @Output() onAddItem: EventEmitter<any> = new EventEmitter();
  experienciaItem: Experiencia = new Experiencia(personaID, "", "", "", "");
  baseUrl: string = environment.baseUrl;

  constructor(private portfolioData: PortfolioDataService){}
  toggleAdding(): void {
    this.onToggleAdding.emit();
  }

  addItem() {
    this.experienciaList?.push(this.experienciaItem!);
    const url = `${this.baseUrl}/experiencia/agregar`
    this.portfolioData.createData(url, this.experienciaItem).subscribe();
    console.log("ADD EDUCATION: ", this.experienciaItem)
    this.onAddItem.emit();
  }
}
