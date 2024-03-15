import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { AuthService } from './auth.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService, private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = localStorage.getItem('token');

    if (authToken) {
      const authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${authToken}`
        }
      });

      return next.handle(authReq).pipe(
        catchError(error => {
          this.router.navigate(['/login']); 
          return throwError(error);
        })
      );
    }

    return next.handle(req);
  }
}
