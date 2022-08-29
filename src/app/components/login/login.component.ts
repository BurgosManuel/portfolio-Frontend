import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginForm } from 'src/app/model/LoginForm';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: LoginForm = new LoginForm('', '');
  isLoggedIn: boolean = false;
  isLoginFailed: boolean = false;
  errorMessage: string = '';
  roles: string[] = [];
  personaID?: number;
  ocultar: boolean = true;
  

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private userStatus: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.tokenStorage.getToken() != null || undefined) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    } else {
      this.isLoggedIn = false;
    }
  }

  login(): void {
    const { username, password } = this.form;
    const observer = {
      next: (data: any) => {
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.tokenStorage.updateID();
        this.tokenStorage.updateRoles();
      },
      error: (err: any) => {
        if (err.error.message === 'Bad Credentials') {
          this.errorMessage = 'Usuario y/o contraseña incorrectos.';
          Swal.fire({
            title: 'Datos Incorrectos',
            text: 'Por favor, revise los datos ingresados.',
            icon: 'error',
            iconColor: '#b10000',
            position: 'top',
            timer: 3000,
            timerProgressBar: true,
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#b10000',
          });
        } else if (err.status == 0) {
          Swal.fire({
            title: 'Error al ingresar',
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
        }
        this.isLoginFailed = true;
      },
    };
    this.authService.login(username, password).subscribe(observer);
  }

  portfolioLink() {
    if (this.tokenStorage.getUser().id != null || undefined) {
      this.personaID = this.tokenStorage.updateID();
      this.router.navigate(['/portfolio', this.personaID]);
    } else {
      this.route.params.subscribe((params) => {
        if (params['id']) {
          this.personaID = +params['id'];
          this.router.navigate(['/portfolio', this.personaID]);
        } else {
          this.router.navigate(['/portfolio']);
        }
      });
    }
  }

  logout(): void {
    this.tokenStorage.signOut();
    this.isLoggedIn = false;
    this.isLoginFailed = false;
    this.userStatus.setUserStatus(false);
  }
}
