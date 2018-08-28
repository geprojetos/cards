import { Component, OnInit } from '@angular/core';
import { CardBase } from '../card-base/card-base';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  cards: CardBase[] = [];

  constructor(
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

    this.cards = this._activatedRoute.snapshot.data['cards']
    console.log(this.cards)
  }

}
