import { Component, OnInit, Input } from '@angular/core';
import { environment } from '../../../../../environments/environment';

const api = environment.api + '/imgs/';

@Component({
  selector: 'app-card-base',
  templateUrl: './card-base.component.html',
  styleUrls: ['./card-base.component.css']
})
export class CardBaseComponent implements OnInit {

  private _url: string = ''

  @Input() description: string;
  @Input() set url(url: string) {

    if(!url.startsWith('data')) {
      this._url = api + url
    } else {
      this._url = url
    }
  }

  get url() {
    return this._url
  }


  constructor() { }

  ngOnInit() {}

}
