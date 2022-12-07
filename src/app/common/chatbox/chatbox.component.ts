import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements OnInit {
  messages = [
    {
      id: 0,
      name: "Kevin",
      isYou: false,
      imgUrl: '/assets/imgs/dp3.jpg',
      message: "Hello Good Day! :)",
      date: new Date(),
    },
    {
      id: 0,
      name: "Kevin",
      isYou: false,
      imgUrl: '/assets/imgs/dp3.jpg',
      message: "I'm Juan dela Cruz, a Freelance Carpenter and with years of experience. I am willing to give you the best service I can here on Gawa PH. Your free to ask me anything about my services.",
      date: new Date(),
    },
  ]

  makeDeal = false;

  constructor(
    private event: EventService
  ) { }

  ngOnInit(): void {
    this.event.subscribe('message', (mess)=>{
      this.messages.push(mess)
    });
    this.event.subscribe('makedeal', (deal)=>{
      this.makeDeal = deal;
    });
  }

}
