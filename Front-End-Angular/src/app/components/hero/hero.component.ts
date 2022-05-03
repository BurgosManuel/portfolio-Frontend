import { Component, OnInit } from '@angular/core';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  url: string = 'http://localhost:5000/hero';
  heroData: any;
  constructor(private portfolioData: PortfolioDataService) {
    this.portfolioData
      .getData(this.url)
      .subscribe((data) => (this.heroData = data));
  }

  showTitle(el: HTMLElement) {
    el.classList.remove('hideText', 'opacity-0');
  }

  ngOnInit(): void {}
}
