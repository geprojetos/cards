import { Injectable } from '@angular/core';

const key = 'key';

@Injectable()
export class ServiceTokenService {

  constructor() { }

  hasToken(): boolean {

    return !!this.getToken()
  }

  getToken(): string {

    return window.localStorage.getItem(key)
  }

  setToken(token: string): void {

    window.localStorage.setItem(key, token)
  }

  removeToken(): void {

    window.localStorage.removeItem(key)
  }
}
