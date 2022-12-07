import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.css']
})
export class SendComponent implements OnInit {
  @Input() messageData = {
    id: 0,
    name: "",
    isYou: false,
    imgUrl: '',
    message: "",
    date: new Date(),
  }

  constructor() { }

  ngOnInit(): void {
  }

}
