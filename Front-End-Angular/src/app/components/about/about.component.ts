import { Component, OnInit } from '@angular/core';
import { Section } from 'src/app/classes/section';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent extends Section {
  // Sobrescribimos la url de la Clase Section, pero mantenemos el resto de lógica.
  override url = 'http://localhost:5000/about';
  imgUrl = 'http://localhost:5000/aboutImg';
  aboutImg: any;

  saveImg(newData: any) {
    this.aboutImg = newData;
    const aboutItem: any = {
      imgUrl: newData,
    };  
    this.portfolioData.updateItem(this.imgUrl, aboutItem).subscribe();
  }

  override ngOnInit(): void {
    this.portfolioData.getData(this.url).subscribe((data) => {
      this.sectionData = data.description;
    });

    this.portfolioData.getData(this.imgUrl).subscribe((data) => {
      this.aboutImg = data.imgUrl;
    });
  }
}
