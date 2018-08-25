import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-message-validate',
  templateUrl: './form-message-validate.component.html',
  styleUrls: ['./form-message-validate.component.css']
})
export class FormMessageValidateComponent implements OnInit {

  @Input() text: string;
  @Input() classe: string = '';

  constructor() { }

  ngOnInit() {
  }

}
