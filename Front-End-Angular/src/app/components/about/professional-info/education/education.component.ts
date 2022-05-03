import { Component, OnInit } from '@angular/core';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  url: string = 'http://localhost:5000/education';
  educationData: any;
  constructor(private portfolioData: PortfolioDataService) {
    this.portfolioData
      .getData(this.url)
      .subscribe((data) => (this.educationData = data));
  }

  ngOnInit(): void {}
}
