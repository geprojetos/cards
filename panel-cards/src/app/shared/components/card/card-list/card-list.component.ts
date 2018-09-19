import { Component, OnInit } from '@angular/core';
import { CardBase } from '../card-base/card-base';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { User } from '../../../interfaces/user/user';
import { CardListService } from './card-list.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  cards: CardBase[] = [];
  filter: string = '';
  hasMore: boolean = true;
  userName: string = '';
  page: number = 1

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _cardListService: CardListService
  ) { }

  ngOnInit() {

    this._activatedRoute.params.subscribe( (parametro:User) => {

      this.cards = this._activatedRoute.snapshot.data['cards']
    })

    this.userName = this._activatedRoute.snapshot.params.userName;
  }

  loadMore(e:Event) {

    e.preventDefault()
    
    this._cardListService
      .listCardsPagination(this.userName, ++this.page)
      .subscribe( res => {

        this.cards = this.cards.concat(res)
        if(!res.length) {
          
          this.hasMore = false;
        }
      })

  }

}
