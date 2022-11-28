import { Component, OnInit } from '@angular/core';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  faArrowRightLong = faArrowRightLong;

  company = [
    {
      title: "Home",
      link:"#",
    },
    {
      title: "About Usad PH",
      link:"#",
    },
    {
      title: "Contact Us",
      link:"#",
    },
    {
      title: "Blogs",
      link:"#",
    },
  ]

  policy = [
    {
      title: "Privacy Policy",
      link:"#",
    },
    {
      title: "Terms & Conditions",
      link:"#",
    },
    {
      title: "Payment Conditions",
      link:"#",
    },
    {
      title: "Warranty Policy",
      link:"#",
    },
  ]

  discover = [
    {
      title: "Latest Jobs",
      link:"#",
    },
    {
      title: "Succcesful Clients",
      link:"#",
    },
    {
      title: "Successful Gigs",
      link:"#",
    },
    {
      title: "Assessment Skill Test",
      link:"#",
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
