import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { SpinnerService } from '../services/spinner.service';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {
  constructor(private spinnerServ: SpinnerService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.spinnerServ.requestStarted();
    console.log('Request started');
    return this.handler(next, req);
  }

  handler(next: any, req: any) {
    return next.handle(req).pipe(
      tap(
        (event) => {
          if (event instanceof HttpResponse) {
            this.spinnerServ.resetSpinner();
            console.log('Request ended');
          }
        },
        (error: HttpErrorResponse) => {
          this.spinnerServ.resetSpinner();
          console.log('Request error');
          throw error;
        }
      )
    );
  }
}

export const spinnerInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true },
];
