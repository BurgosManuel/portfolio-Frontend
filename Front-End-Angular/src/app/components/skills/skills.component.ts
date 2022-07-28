import { Component, Input, OnInit } from '@angular/core';
import { ItemsSection, Section } from 'src/app/classes/section';
import { Habilidad } from 'src/app/model/Habilidad';
import { Seccion } from 'src/app/model/Seccion';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  // Informacion de la descripcion
  @Input() seccionData?: Seccion;
  @Input() habilidadesData?: Habilidad[];

  habilidadesFront?: Habilidad[];
  habilidadesBack?: Habilidad[];
  habilidadesSoft?: Habilidad[];
  isEditing: boolean = false;

  constructor(private portfolioData: PortfolioDataService) {}

  toggleEdition(editingState: boolean): void {
    this.isEditing = editingState;
  }

  // Método que utilizamos para guardar cambios, el mismo actualiza los datos de la propiedad 'sectionData' y llama al método del servicio que se encarga de actualizar los datos en el JSON.
  updateSeccion(newData: Seccion): void {
    const url = `http://localhost:8080/secciones/editar/${this.seccionData?.id}`;
    this.seccionData = newData;
    this.portfolioData.updateData(url, newData).subscribe();
    console.log('Nuevos datos Skills:', newData);
  }

  ngOnInit(): void {
    this.habilidadesFront = this.habilidadesData?.filter(
      (el) => el.tipo == 'Frontend'
    );
    this.habilidadesBack = this.habilidadesData?.filter(
      (el) => el.tipo == 'Backend'
    );
    this.habilidadesSoft = this.habilidadesData?.filter(
      (el) => el.tipo == 'Soft'
    );

    console.log(
      this.habilidadesBack,
      this.habilidadesFront,
      this.habilidadesSoft
    );
  }
}
