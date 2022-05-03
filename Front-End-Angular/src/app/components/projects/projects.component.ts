import { Component, OnInit } from '@angular/core';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  url: string = 'http://localhost:5000/projects';
  projectsData: any;
  projectsList: any;

  constructor(private portfolioData: PortfolioDataService) {
    this.portfolioData.getData(this.url).subscribe((data) => {
      this.projectsData = data.description;
      this.projectsList = data.projectsList;
    });
  }

  ngOnInit(): void {}
}
