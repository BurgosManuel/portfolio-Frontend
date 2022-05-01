import { Component, OnInit } from '@angular/core';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skillsData: any;
  frontData: any;
  backData: any;
  softData: any;
  constructor(private portfolioData: PortfolioDataService) {
    this.portfolioData.getData().subscribe((data) => {
      this.skillsData = data.skills.description;
      this.frontData = data.skills.frontend;
      this.backData = data.skills.backend;
      this.softData = data.skills.soft;
    });
  }

  ngOnInit(): void {}
}
