import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { environment } from '../../../../../environments/environment';

import { ServiceUserService } from '../../../services/service-user/service.user.service';

const api = environment.api;

@Injectable()
export class FormLoginService {

  constructor(
    private _httpClient: HttpClient,
    private _userService: ServiceUserService
  ) { }

  login(userName: string, userPassword: string) {

    return this._httpClient
      .post(
          api + '/user/login', 
          { userName: userName, password: userPassword },
          { observe: 'response' }
      )
      .pipe(tap( res => {

        const token = res.headers.get('x-access-token')
        
        this._userService.setToken(token)
      })) 
  }
}
