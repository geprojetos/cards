import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../../../environments/environment'
import { CardBase } from '../card-base/card-base';
import { CardComments } from '../card-comments/card-comments';

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

  findCardById(id: number): Observable<CardBase[]> {

    return this._httpClient
      .get<CardBase[]>(api + '/photos/' + id)
  }

  getComments(id: number): Observable<CardComments[]> {

    return this._httpClient.get<CardComments[]>(api + '/photos/' + id + '/comments')
  }

  addComments(id: number, comment: string) {

    return this._httpClient.post(
        api + '/photos/' + id + '/comments',
        { commentText: comment }
    )
  }
}
