import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import Swal from 'sweetalert2';
import { TokenStorageService } from '../services/token-storage.service';
import { UserService } from '../services/user.service';
declare let window: any;

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private tokenService: TokenStorageService,
    private router: Router,
    private userStatus: UserService
  ) {}

  handleAuthError(err: HttpErrorResponse): Observable<any> {
    if (err.status === 401) {
      this.tokenService.signOut();
      this.userStatus.setUserStatus(false);
      // alert('La sesión ha expirado, por favor inicie sesión nuevamente.');
      Swal.fire({
        title: 'Sesión Expirada',
        text: 'Por favor, inicie sesión nuevamente.',
        icon: 'warning',
        iconColor: 'orange' ,
        allowOutsideClick: false,
        position: 'top',
        confirmButtonText: 'Ingresar',
        confirmButtonColor: 'orange',
      }).then(result => {
        if(result.isConfirmed) {this.router.navigateByUrl('/ingreso')}
      })
    }
    return throwError(err);
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.tokenService.getToken();
    // Interceptamos los llamados que NO sean a FormSubmit, ya que sino generamos errores de CORS.
    if(!req.url.includes("formsubmit")) {
      let authReq = !token
        ? req
        : req.clone({
            setHeaders: { Authorization: `Bearer ${token}` },
          });
      return next.handle(authReq).pipe(catchError((err) => this.handleAuthError(err)));
    }
    return next.handle(req).pipe(catchError((err) => this.handleAuthError(err)));
  }
}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
];
