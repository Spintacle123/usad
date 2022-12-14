import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-bread-crumbs',
  templateUrl: './bread-crumbs.component.html',
  styleUrls: ['./bread-crumbs.component.css']
})
export class BreadCrumbsComponent implements OnInit {

  letBreads = [
    {
      id: 1,
      label: 'Overview',
      isActive: true
    },
    {
      id: 2,
      label: 'Pricing',
      isActive: false
    },
    {
      id: 3,
      label: 'FAQs',
      isActive: false
    },
    // {
    //   id: 4,
    //   label: 'Requirement',
    //   isActive: false
    // },
    // {
    //   id: 5,
    //   label: 'Publish',
    //   isActive: false
    // }
  ]

  constructor(
    public event: EventService
  ) { }

  ngOnInit(): void {
  }

  setActiveTab(event: any){
    this.event.publish('setTab', event)
    this.letBreads.forEach((bread: any) =>{
      if(event.id === bread.id){
        bread.isActive = true
      }else{
        bread.isActive = false
      }
    })
  }
}
