import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private _router: Router,
    private _activated: ActivatedRoute,
    private _title: Title
  ) {}

  ngOnInit(): void {

    this._router
      .events
      .pipe(filter(event => event instanceof NavigationEnd ))
      .pipe(map(() => this._activated ))
      .pipe(map( route => {
        while(route.firstChild) route = route.firstChild
        return route
      }))
      .pipe(switchMap( route => route.data ))
      .subscribe( event => this._title.setTitle(event.title) )
  }
}
