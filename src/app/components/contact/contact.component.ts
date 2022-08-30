import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Toast } from 'src/app/helpers/Toast';
import { ContactForm } from 'src/app/model/ContactForm';
import { Seccion } from 'src/app/model/Seccion';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  @Input() seccionData?: Seccion;
  isEditing: boolean = false;
  baseUrl: string = environment.baseUrl;
  frontUrl: string = environment.frontUrl;
  form: ContactForm = new ContactForm('', '', '');
  userEmail: string = 'trapecioinv@gmail.com';

  constructor(
    private portfolioData: PortfolioDataService,
    private http: HttpClient,
    private tokenStorage: TokenStorageService
  ) {}

  // Método que cambia el estado del booleano, esto nos servirá para pasar del "modo edicion" al "modo visualizar".
  toggleEdition(editingState: boolean): void {
    this.isEditing = editingState;
  }

  // Método que utilizamos para guardar cambios, el mismo actualiza los datos de la propiedad 'sectionData' y llama al método del servicio que se encarga de actualizar los datos en el JSON.
  updateSeccion(newData: Seccion): void {
    const url = `${this.baseUrl}/secciones/editar/${this.seccionData?.id}`;
    this.seccionData = newData;
    this.portfolioData.updateData(url, newData).subscribe(() => {
      Toast.fire({
        title: 'Sección actualizada correctamente.',
        icon: 'success',
      });
    });
  }

  reloadSeccion() {
    this.portfolioData
      .getData(`${this.baseUrl}/secciones/${this.seccionData?.id}`)
      .subscribe((data) => {
        this.seccionData = data;
      });
  }

  enviar(): void {
    const emailUrl = `${this.baseUrl}/api/enviar`;
    this.form.receptor = this.userEmail;
    const observer = {
      next: () => {
        Swal.fire(
          '¡Formulario Enviado!',
          'Gracias por dejarme tu mensaje, te responderé lo más pronto posible.',
          'success'
        ).then(()=> {
          location.reload();
        });
      },
      error: (err: any) => {
        Swal.fire(
          '¡Error!',
          `No pudimos enviar su mensaje. <br><b>Código de error: ${err.status}</b>`,
          'error'
        );
      },
    };

    this.http
      .post(emailUrl, this.form)
      .subscribe(observer);
  }

  ngOnInit() {
    let user = this.tokenStorage.getUser();
    user.email != undefined ? (this.userEmail = user.email) : null;
  }
}
