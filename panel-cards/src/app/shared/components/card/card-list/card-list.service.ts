import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../../../environments/environment'
import { CardBase } from '../card-base/card-base';

const api = environment.api;

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
