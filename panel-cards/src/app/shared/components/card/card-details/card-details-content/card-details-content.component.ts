import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-details-content',
  templateUrl: './card-details-content.component.html',
  styleUrls: ['./card-details-content.component.css']
})
export class CardDetailsContentComponent implements OnInit {

  constructor() { }

  ngOnInit() { console.log('detalhe')
  }

}
