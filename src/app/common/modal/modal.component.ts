import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faClose, faHandshakeAlt } from '@fortawesome/free-solid-svg-icons';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() type="modal";
  @Output() close = new EventEmitter<boolean>();
  message = ""
  faClose = faClose;
  faHandshakeAlt = faHandshakeAlt;
  deal = false;

  constructor(
    private event: EventService
  ) { }

  ngOnInit(): void {
  }

  closeModal(bol: boolean) {
    this.close.emit(bol);
  }

  makeDeal(){
    this.event.publish('makedeal', true);
    this.deal = true;
  }

  sendMessage(){
    let composeMessage = {
      name: "Joyce",
      isYou: true,
      imgUrl: '',
      message: this.message,
      date: new Date(),
    }

    if(this.message !== ''){
      this.event.publish('message', composeMessage);
      this.message = "";
    }
  }

}
