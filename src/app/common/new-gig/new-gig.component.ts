import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-new-gig',
  templateUrl: './new-gig.component.html',
  styleUrls: ['./new-gig.component.css']
})
export class NewGigComponent implements OnInit {

  activeTab = 3

  constructor(
    public event: EventService
  ) { }

  ngOnInit(): void {
    this.event.subscribe('setTab', (tab)=>{
      this.activeTab = tab.id
    })
  }
}
