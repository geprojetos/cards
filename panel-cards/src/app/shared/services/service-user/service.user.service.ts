import { Injectable } from '@angular/core';

import * as jwt_decote from 'jwt-decode'
import { ServiceTokenService } from '../service-token/service-token.service';

@Injectable()
export class ServiceUserService {

  constructor(
    private _tokenService: ServiceTokenService
  ) { }

  setToken(token) {

    this._tokenService.setToken(token)
  }
}
