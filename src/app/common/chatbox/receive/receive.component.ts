import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-receive',
  templateUrl: './receive.component.html',
  styleUrls: ['./receive.component.css']
})
export class ReceiveComponent implements OnInit {
  @Input() hasDp = true;
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
