import { Component, OnInit } from '@angular/core';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  heroData: any;
  constructor(private portfolioData: PortfolioDataService) {
    this.portfolioData
      .getData()
      .subscribe((data) => (this.heroData = data.hero));
  }

  ngOnInit(): void {}
}
