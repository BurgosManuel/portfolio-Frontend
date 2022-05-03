import { Component, OnInit } from '@angular/core';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  url: string = 'http://localhost:5000/about';
  isEditing: boolean = false;
  aboutData: any;

  constructor(private portfolioData: PortfolioDataService) {
    this.portfolioData
      .getData(this.url)
      .subscribe((data) => (this.aboutData = data.description));
  }

  toggleEdition(editingState: boolean): void {
    this.isEditing = editingState;
  }

  saveChanges(newData: any): void {
    this.aboutData = newData;
  }

  ngOnInit(): void {}
}
