import { Component, OnInit, Input } from '@angular/core';
import { CardBase } from '../../card-base/card-base';

@Component({
  selector: 'app-card-not-registered',
  templateUrl: './card-not-registered.component.html',
  styleUrls: ['./card-not-registered.component.css']
})
export class CardNotRegisteredComponent implements OnInit {

  @Input() cards: CardBase[] = [];

  constructor() { }

  ngOnInit() {
  }

}
