import { Component, OnInit } from '@angular/core';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  jobData: any;
  constructor(private portfolioData: PortfolioDataService) {
    this.portfolioData
      .getData()
      .subscribe((data) => (this.jobData = data.experience));
  }

  ngOnInit(): void {
  }

}
