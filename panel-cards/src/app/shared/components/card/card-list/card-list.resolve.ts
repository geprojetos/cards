import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { CardBase } from '../card-base/card-base';
import { CardListService } from './card-list.service';

@Injectable()
export class CardListResolve implements Resolve<Observable<CardBase[]>> {

    constructor(
        private _cardListService: CardListService
    ) {}

    resolve(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot
    ): Observable<CardBase[]> {

        const userName = route.params.userName;
        
        return this._cardListService.listCardsPagination(userName, 1)
    }
}