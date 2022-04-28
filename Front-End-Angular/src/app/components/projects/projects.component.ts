import { Component, OnInit } from '@angular/core';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  apiUrl: string = this.portfolioData.apiUrl;
  projectsData: any;
  projectsList: any;

  constructor(private portfolioData: PortfolioDataService) {
    this.portfolioData.getData().subscribe((data) => {
      this.projectsData = data.projects;
      this.projectsList = data.projectsList;
    });
  }

  ngOnInit(): void {}
}
