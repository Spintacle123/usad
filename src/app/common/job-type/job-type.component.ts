import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-type',
  templateUrl: './job-type.component.html',
  styleUrls: ['./job-type.component.css']
})
export class JobTypeComponent implements OnInit {

  works = [
    {
      title: "Post a Job",
      imgUrl: "/assets/imgs/svg/Rectangle 18.svg"
    },
    {
      title: "Choose a freelancers",
      imgUrl: "/assets/imgs/svg/Rectangle 18-1.svg"
    },{
      title: "Pay Safely",
      imgUrl: "/assets/imgs/svg/Rectangle 18-2.svg"
    },{
      title: "We're here to help",
      imgUrl: "/assets/imgs/svg/Rectangle 18-3.svg"
    },
  ]

  benefits = [
    {
      title: "Browse Profile",
      imgUrl: "/assets/imgs/svg/browse.svg"
    },
    {
      title: "Fast Bids",
      imgUrl: "/assets/imgs/svg/fast.svg"
    },{
      title: "Quality of Work",
      imgUrl: "/assets/imgs/svg/quality.svg"
    },{
      title: "Track Progress",
      imgUrl: "/assets/imgs/svg/track.svg"
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
