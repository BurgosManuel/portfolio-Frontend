import { Component, OnInit } from '@angular/core';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  apiUrl: string = this.portfolioData.apiUrl;
  skillsData: any;
  frontData: any;
  backData: any;
  softData: any;
  constructor(private portfolioData: PortfolioDataService) {
    this.portfolioData.getData().subscribe((data) => {
      this.skillsData = data.skills;
      this.frontData = data.frontend;
      this.backData = data.backend;
      this.softData = data.soft;
    });
  }

  ngOnInit(): void {}
}
