import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../../../interfaces/user/user';

const apiCadastro = 'http://localhost:3000';

@Injectable()
export class FormCadastroService {

  constructor(
    private _httpClient: HttpClient
  ) { }

  register(user: User) {

    return this._httpClient
      .post(apiCadastro + '/user/signup', user)
  }

  checkedShortName(userName: string) {

    return this._httpClient
      .get(apiCadastro + '/user/exists/' + userName)
  }
}
