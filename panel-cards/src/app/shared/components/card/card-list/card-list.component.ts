import { Component, OnInit } from '@angular/core';
import { CardBase } from '../card-base/card-base';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../../interfaces/user/user';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  cards: CardBase[] = [];
  filter: string = '';

  constructor(
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

    this._activatedRoute.params.subscribe( (parametro:User) => {

      this.cards = this._activatedRoute.snapshot.data['cards']
    })
  }

}
