import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpResponse, HttpUserEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { LoadingService } from '../loading-service/loading.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

    constructor(
        private _loadingService: LoadingService
    ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): 
        Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>>{
        
        return next
            .handle(req)
            .pipe(tap( event => {

                if(event instanceof HttpResponse) {

                    this._loadingService.stop()
                } else {
                    this._loadingService.start()
                }
            }))
    }

}