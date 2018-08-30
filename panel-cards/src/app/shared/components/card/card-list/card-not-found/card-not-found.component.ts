import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { CardBase } from '../../card-base/card-base';

@Component({
  selector: 'app-card-not-found',
  templateUrl: './card-not-found.component.html',
  styleUrls: ['./card-not-found.component.css']
})
export class CardNotFoundComponent {

  @Input() cards: CardBase[] = [];
  @Input() filter: string = '';

  constructor() { }

}
