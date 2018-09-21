import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-card-comments',
  templateUrl: './card-comments.component.html',
  styleUrls: ['./card-comments.component.css']
})
export class CardCommentsComponent implements OnInit {

  @Input() likes: number;
  @Input() comments: number;
  @Output() acao = new EventEmitter()
  fn: Subject<any> = new Subject()
  
  constructor() { }

  ngOnInit() {

    this.fn.subscribe(res => this.acao.emit(res))
  }

}
