import { Component, OnInit } from '@angular/core';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  url: string = 'http://localhost:5000/skills';
  skillsData: any;
  frontData: any;
  backData: any;
  softData: any;
  constructor(private portfolioData: PortfolioDataService) {
    this.portfolioData.getData(this.url).subscribe((data) => {
      this.skillsData = data.description;
      this.frontData = data.frontend;
      this.backData = data.backend;
      this.softData = data.soft;
    });
  }

  ngOnInit(): void {}
}
