import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-details-content',
  templateUrl: './card-details-content.component.html',
  styleUrls: ['./card-details-content.component.css']
})
export class CardDetailsContentComponent implements OnInit {

  cardId: number
  
  constructor(
    private _activateRouter: ActivatedRoute
  ) { }

  ngOnInit() { 
    
   this.cardId = this._activateRouter.snapshot.params.cardId
   console.log(this.cardId)
  }

}
