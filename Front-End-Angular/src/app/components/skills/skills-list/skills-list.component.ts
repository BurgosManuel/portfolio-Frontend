import { Component, Input, OnInit } from '@angular/core';
import { ItemsSection } from 'src/app/classes/section';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';

@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.css'],
})
export class SkillsListComponent {
  @Input() url: any;
  @Input() skillsArray: any[] = [];
  @Input() skillsTitle: string = 'Example';
  @Input() barColor: string = 'bg-primary';
  isAdding: boolean = false;

  constructor(private portfolioData: PortfolioDataService) {}

  toggleAdding(addingState: boolean): void {
    this.isAdding = addingState;
  }

  addItem(item: any) {
    this.portfolioData.addItem(this.url, item).subscribe();
  }

  deleteItem(item: any, index: number): void {
    this.skillsArray.splice(index, 1);
    this.portfolioData.deleteItem(this.url, item).subscribe();
  }

}
