import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { LoadingService } from '../loading-service/loading.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'ap-loading',
  templateUrl: './loading-content.component.html',
  styleUrls: ['./loading-content.component.css']
})
export class LoadingContentComponent implements OnInit {

  loading$: Observable<string>;

  constructor(
    private _loadingService: LoadingService
  ) { }

  ngOnInit() {

    this.loading$ = this._loadingService
      .getLoading()
      .pipe(map(loadingType => loadingType.valueOf()))
  }

}
