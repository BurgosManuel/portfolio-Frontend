import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Educacion } from 'src/app/model/Educacion';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-education-add-item',
  templateUrl: './education-add-item.component.html',
  styleUrls: ['./education-add-item.component.css'],
})
export class EducationAddItem  {
  @Input() isAdding: boolean = false;
  @Input() educacionList?: Educacion[];
  @Output() onToggleAdding: EventEmitter<any> = new EventEmitter();
  @Output() onAddItem: EventEmitter<any> = new EventEmitter();
  educacionItem: Educacion = new Educacion(1, "", "", "", "");
  baseUrl: string = environment.baseUrl;

  constructor(private portfolioData: PortfolioDataService){}
  toggleAdding(): void {
    this.onToggleAdding.emit();
  }

  addItem() {
    this.educacionList?.push(this.educacionItem!);
    const url = `${this.baseUrl}/educacion/agregar`
    this.portfolioData.createData(url, this.educacionItem).subscribe();
    console.log("ADD EDUCATION: ", this.educacionItem)
    this.onAddItem.emit();
  }

}
