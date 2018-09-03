import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

import { User } from '../../../interfaces/user/user';

const api = environment.api;

@Injectable()
export class FormCadastroService {

  constructor(
    private _httpClient: HttpClient
  ) { }

  register(user: User) {

    return this._httpClient
      .post(api + '/user/signup', user)
  }

  checkedShortName(userName: string) {

    return this._httpClient
      .get(api + '/user/exists/' + userName)
  }
}
