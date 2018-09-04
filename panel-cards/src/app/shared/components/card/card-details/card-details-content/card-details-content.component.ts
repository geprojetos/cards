import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'

import { CardListService } from '../../card-list/card-list.service';
import { CardBase } from '../../card-base/card-base';

@Component({
  selector: 'app-card-details-content',
  templateUrl: './card-details-content.component.html',
  styleUrls: ['./card-details-content.component.css']
})
export class CardDetailsContentComponent implements OnInit {

  cardId: number
  card: CardBase[] = []
  
  constructor(
    private _activateRouter: ActivatedRoute,
    private _cardListService: CardListService,
    private _localtion: Location
  ) { }

  ngOnInit() { 
    
   this.cardId = this._activateRouter.snapshot.params.cardId

   this._cardListService
    .findCardById(this.cardId)
    .subscribe( res => {

      this.card = res
      console.log(res)
    })
  }

  backToPage(e: Event) {

    e.preventDefault()
    this._localtion.back()
  }

}
