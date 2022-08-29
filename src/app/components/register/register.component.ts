import { Component, OnInit } from '@angular/core';
import { RegistroForm } from 'src/app/model/RegistroForm';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form: RegistroForm = new RegistroForm('', '', '');

  isSuccessful: boolean = false;
  registerFailed: boolean = false;
  errorMessage: string = '';
  ocultar: boolean = true;

  constructor(private authService: AuthService) {}

  registerUser(): void {
    const { username, email, password } = this.form;

    const observer = {
      next: (data: any) => {
        this.isSuccessful = true;
        this.registerFailed = false;
      },
      error: (err: any) => {
        this.errorMessage = `${err.status}: ${err.error.message}`;
        if (err.status == 0) {
          Swal.fire({
            title: 'Error de registro',
            text: `Ocurrió un error en el servidor.`,
            icon: 'error',
            iconColor: '#b10000',
            position: 'center',
            timer: 3000,
            timerProgressBar: true,
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#b10000',
          });
        } else {
          this.errorMessage = `${err.status}: ${err.error.message}`;
          Swal.fire({
            title: 'Error al ingresar',
            text: `Hubo un error en su solicitud: ${this.errorMessage}`,
            icon: 'error',
            iconColor: '#b10000',
            position: 'center',
            timer: 3000,
            timerProgressBar: true,
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#b10000',
          });
          this.registerFailed = true;
        }
      },
    };
    this.authService.register(username, email, password).subscribe(observer);
  }

  ngOnInit(): void {}
}
