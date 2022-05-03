import { Component, OnInit } from '@angular/core';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  url: string = 'http://localhost:5000/contact';
  contactData: any;
  constructor(private portfolioData: PortfolioDataService) {
    this.portfolioData.getData(this.url).subscribe((data) => {
      this.contactData = data.description;
    });
  }

  ngOnInit(): void {}
}
