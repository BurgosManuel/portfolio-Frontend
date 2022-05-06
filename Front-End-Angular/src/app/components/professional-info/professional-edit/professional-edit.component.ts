import { Component} from '@angular/core';
import { Edition } from 'src/app/classes/edition';

@Component({
  selector: 'app-professional-edit',
  templateUrl: './professional-edit.component.html',
  styleUrls: ['./professional-edit.component.css'],
})
export class ProfessionalEditComponent extends Edition {
  url: string = 'http://localhost:5000/education';

  reload(): void {
    window.location.reload();
  }
}
