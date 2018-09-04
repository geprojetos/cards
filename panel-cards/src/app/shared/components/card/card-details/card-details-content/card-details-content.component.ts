import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardListService } from '../../card-list/card-list.service';

@Component({
  selector: 'app-card-details-content',
  templateUrl: './card-details-content.component.html',
  styleUrls: ['./card-details-content.component.css']
})
export class CardDetailsContentComponent implements OnInit {

  cardId: number
  
  constructor(
    private _activateRouter: ActivatedRoute,
    private _cardListService: CardListService
  ) { }

  ngOnInit() { 
    
   this.cardId = this._activateRouter.snapshot.params.cardId

   this._cardListService
    .findCardById(this.cardId)
    .subscribe( res => console.log(res))
  }

}
