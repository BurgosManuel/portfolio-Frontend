import { Component} from '@angular/core';
import { ItemsSection} from 'src/app/classes/section';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent extends ItemsSection {
  // Sobrescribimos la url de la descripcion
  override url: string = 'http://localhost:5000/experience';
}
