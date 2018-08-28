import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CardBase } from '../card-base/card-base';
import { Observable } from 'rxjs';

const api = 'http://localhost:3000';

@Injectable()
export class CardListService {

  constructor(
    private _httpClient: HttpClient
  ) { }

  listCards(userName: string): Observable<CardBase[]> {

    return this._httpClient
      .get<CardBase[]>(api + '/' + userName + '/photos')
  }
}
