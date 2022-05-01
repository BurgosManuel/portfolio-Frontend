import { Component, OnInit } from '@angular/core';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contactData: any;
  constructor(private portfolioData: PortfolioDataService) {
    this.portfolioData.getData().subscribe((data) => {
      this.contactData = data.contact.description;
    });
  }

  ngOnInit(): void {}
}
