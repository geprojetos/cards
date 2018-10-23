import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.css']
})
export class ModalContentComponent implements OnInit, OnChanges {

  type: string;
  @Input() modal: boolean = true;
  @Input() confirmButton: boolean = false;
  @Input() successButton: boolean = false;
  @Input() infoButton: boolean = false;
  @Input() dangerButton: boolean = false
  @Input() redirectButton:  boolean = false;
  @Input() title: string;
  @Input() text: string;
  @Output() ok: EventEmitter<boolean> = new EventEmitter();
  @Output() redir: EventEmitter<boolean> = new EventEmitter()

  constructor() { }

  ngOnInit() {}

  ngOnChanges() {
    
    if(this.successButton) {
      
      this.type = 'bg-success text-white';
      return;
    }

    if(this.confirmButton) {
      
      this.type = 'bg-primary text-white';
      return;
    }

    if(this.infoButton) {

      this.type = 'bg-info text-white';
      return;
    }

    if(this.dangerButton) {

      this.type = 'bg-danger text-white';
      return;
    }

    if(this.redirectButton) {
      
      this.type = 'bg-success text-white';
      return;
    }
  }

  confirmChange() {

    this.ok.emit(true);
  }

  redirectRoute() {

    this.redir.emit(true)
  }

  closeModal() {

    this.modal = !this.modal;
  }
}
