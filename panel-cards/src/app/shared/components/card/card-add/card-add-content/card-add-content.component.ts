import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-card-add-content',
  templateUrl: './card-add-content.component.html',
  styleUrls: ['./card-add-content.component.css']
})
export class CardAddContentComponent implements OnInit {

  constructor(
    private _location: Location
  ) { }

  ngOnInit() {
  }

  backToPage(e: Event) {

    e.preventDefault()
    this._location.back()
  }

}
