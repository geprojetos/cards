import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-card-search',
  templateUrl: './card-search.component.html',
  styleUrls: ['./card-search.component.css']
})
export class CardSearchComponent implements OnInit {

  @Output() typing = new EventEmitter()
  debounce: Subject<string> = new Subject()

  constructor() { }

  ngOnInit() {

    this.debounce
    .pipe(debounceTime(600))
    .subscribe( digitado => this.typing.emit(digitado) )
  }

}
