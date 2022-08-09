import { Component, OnInit } from '@angular/core';
import { LoginForm } from 'src/app/model/LoginForm';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

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

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
  ) {}

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
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
        console.log("ID Persona: ", data.id)
        this.tokenStorage.updateID();
      },
      error: (err: any) => {
        if(err.status == 401) {
          this.errorMessage = "Usuario y/o contraseña incorrectos."
        } else {
          this.errorMessage = `${err.status}: ${err.error.message}`
        }
        console.log(err)
        this.isLoginFailed = true;
      },
    };
    this.authService.login(username, password).subscribe(observer);
  }

  logout(): void{
    this.tokenStorage.signOut();
    this.isLoggedIn = false;
    this.isLoginFailed = false;
  }
}
