import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-base',
  templateUrl: './card-base.component.html',
  styleUrls: ['./card-base.component.css']
})
export class CardBaseComponent implements OnInit {

  @Input() url: string;
  @Input() description: string;
  
  constructor() { }

  ngOnInit() {
  }

}
