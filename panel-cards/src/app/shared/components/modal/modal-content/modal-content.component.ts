import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.css']
})
export class ModalContentComponent implements OnInit {

  @Input() modal: boolean = true;
  @Input() title: string;
  @Input() text: string;
  @Input() closeButton: boolean = false
  @Input() confirmButton: boolean = false;
  @Output() ok: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  confirmChange() {

    this.ok.emit(true);
    console.log('sim')
  }

  closeModal() {

    this.modal = !this.modal;
  }
}
