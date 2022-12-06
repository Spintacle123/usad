import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-clients',
  templateUrl: './user-clients.component.html',
  styleUrls: ['./user-clients.component.css']
})
export class UserClientsComponent implements OnInit {

  clients = [
    {
      imgUrl: '/assets/imgs/jci.png',
      title: 'JCI Philippines',
      desc: 'Lorem ipsum dolor sit amet, consectetur.',
      date: 'April 2022'
    },
    {
      imgUrl: '/assets/imgs/mark.png',
      title: 'JCI Philippines',
      desc: 'Lorem ipsum dolor sit amet, consectetur.',
      date: 'April 2022'
    },
    {
      imgUrl: '/assets/imgs/pen.png',
      title: 'enafiel’s Architecture Firm',
      desc: 'Lorem ipsum dolor sit amet, consectetur.',
      date: 'April 2022'
    },
    {
      imgUrl: '/assets/imgs/rose.png',
      title: 'Ms. Maria Makiling',
      desc: 'Lorem ipsum dolor sit amet, consectetur.',
      date: 'April 2022'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
