import { Component, OnInit } from '@angular/core';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  apiUrl: string = this.portfolioData.apiUrl;

  constructor(private portfolioData: PortfolioDataService) {}

  ngOnInit(): void {
    this.portfolioData.getData().subscribe((data) => console.log(data));
  }
}
