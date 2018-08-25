import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const key = 'key';

@Injectable()
export class ServiceTokenService {

  constructor(
    private _httpClient: HttpClient
  ) { }

  hasToken(): boolean {

    return !!this.getToken()
  }

  getToken() {

    return localStorage.getItem(key)
  }

  setToken(token: string) {

    localStorage.setItem(key, token)
  }

  removeToken() {

    localStorage.removeItem(key)
  }
}
