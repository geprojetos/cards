import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';

import { environment } from '../../../../../environments/environment'
import { CardBase } from '../card-base/card-base';
import { CardComments } from '../card-comments/card-comments';
import { map, catchError } from 'rxjs/operators';

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

  listCardsPagination(userName: string, page: number): Observable<CardBase[]> {

    const params = new HttpParams().append('page', page.toString())

    return this._httpClient
      .get<CardBase[]>(
        api + '/' + userName + '/photos', 
        { params: params }
      )
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

  like(id: number) {

    return this._httpClient
      .post(
        api + '/photos/' + id + '/like',
        {},
        { observe: 'response' }
    )
    .pipe( map( res => true))
    .pipe(catchError( erro => {

      return erro.status == '304' ? of(false) : throwError(erro)
    }))
  }
}
