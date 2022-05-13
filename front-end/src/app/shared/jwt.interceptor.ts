import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpHeaders
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from "../auth/shared/auth.service";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const token: string | null = localStorage.getItem('jwt')
    const headers = new HttpHeaders()
      .append('Authorization', `Bearer ${token}`);
    const modifiedReq = request.clone({headers});
    return next.handle(modifiedReq);
  }
}
