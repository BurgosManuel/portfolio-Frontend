import { Component, OnInit } from '@angular/core';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  url: string = 'http://localhost:5000/experience';
  jobData: any;
  constructor(private portfolioData: PortfolioDataService) {
    this.portfolioData
      .getData(this.url)
      .subscribe((data) => (this.jobData = data));
  }

  ngOnInit(): void {
  }

}
