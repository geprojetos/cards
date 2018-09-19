import { Component, OnInit, Input } from '@angular/core';
import { CardBase } from '../card-base/card-base';

@Component({
  selector: 'app-card-button-more-cards',
  templateUrl: './card-button-more-cards.component.html',
  styleUrls: ['./card-button-more-cards.component.css']
})
export class CardButtonMoreCardsComponent implements OnInit {

  @Input() hasMore: boolean;
  @Input() cards: CardBase[] = [];

  constructor() { }

  ngOnInit() {

    if(!this.cards.length) {

      this.hasMore = false
    } else {
      
      this.hasMore = true
    }
  }

}
