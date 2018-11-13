import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {

  visible: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.visible = !this.visible;
  }

}
