import { Component, Input, OnChanges } from '@angular/core';
import { CardBase } from '../../card-base/card-base';

@Component({
  selector: 'app-card-grid',
  templateUrl: './card-grid.component.html',
  styleUrls: ['./card-grid.component.css']
})
export class CardGridComponent implements OnChanges {

  @Input() cards: CardBase[] = [];
  grid: any;

  constructor() { }

  ngOnChanges() {

    this.grid = this.createGrid(this.cards)
  }

  createGrid(cards) {

    const coluns = []

    for(let i=0; i<cards.length; i+=4) {

      coluns.push(cards.slice(i, i+4))
    }

    return coluns
  }

}
