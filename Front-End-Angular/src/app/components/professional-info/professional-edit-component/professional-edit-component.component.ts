import { Component, Output, EventEmitter } from '@angular/core';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';
import { Edition } from 'src/section';

@Component({
  selector: 'app-professional-edit-component',
  templateUrl: './professional-edit-component.component.html',
  styleUrls: ['./professional-edit-component.component.css'],
})
export class ProfessionalEditComponentComponent extends Edition {
  url: string = 'http://localhost:5000/education';

  reload(): void {
    window.location.reload();
  }
}
