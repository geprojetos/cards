import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import * as jwt_decote from 'jwt-decode'
import { ServiceTokenService } from '../service-token/service-token.service';
import { Payload } from '../../interfaces/payload/payload';

@Injectable()
export class ServiceUserService {

  userSubject = new BehaviorSubject<Payload>(null)

  constructor(
    private _tokenService: ServiceTokenService
  ) {

    this._tokenService.hasToken() && this.decodifyToken()
  }

  setToken(token: string) {

    this._tokenService.setToken(token)
    this.decodifyToken()
  }

  decodifyToken() {

    const token = this._tokenService.getToken()
    const infoToken = jwt_decote(token) as Payload

    this.userSubject.next(infoToken)
  }

  getUserPayload() {

    return this.userSubject.asObservable()
  }

  logout() {

    this._tokenService.removeToken()
    this.userSubject.next(null)
  }

  isLogged(): boolean {

    return this._tokenService.hasToken()
  }
}
