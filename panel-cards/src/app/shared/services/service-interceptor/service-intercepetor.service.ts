import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaderResponse, HttpProgressEvent, HttpResponse, HttpUserEvent, HttpSentEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ServiceTokenService } from '../service-token/service-token.service';

@Injectable()
export class ServiceIntercepetorService implements HttpInterceptor {
  
  constructor(
    private _tokenService: ServiceTokenService
  ) { }
  
  intercept(
    req: HttpRequest<any>, 
    next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {

      if(this._tokenService.hasToken()) {

        const token = this._tokenService.getToken()
        
        req = req.clone({
          setHeaders: {
            'x-access-token': token
          }
        });
      }
      return next.handle(req)
  }
  
}
