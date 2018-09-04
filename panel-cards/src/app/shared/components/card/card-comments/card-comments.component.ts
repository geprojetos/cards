import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-comments',
  templateUrl: './card-comments.component.html',
  styleUrls: ['./card-comments.component.css']
})
export class CardCommentsComponent implements OnInit {

  @Input() likes: number;
  @Input() comments: number;
  
  constructor() { }

  ngOnInit() {
  }

}
