import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const api = 'http://localhost:3000';

@Injectable()
export class CardListService {

  constructor(
    private _httpClient: HttpClient
  ) { }

  listCards(userName: string) {

    return this._httpClient
      .get(api + '/' + userName + '/photos')
  }
}
