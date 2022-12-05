import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navBar = [
    {
      label: "Overview",
      isActive: true,
    },
    {
      label: "Description",
      isActive: false,
    },
    {
      label: "About the applicant",
      isActive: false,
    },
    {
      label: "Comparing Packages",
      isActive: false,
    },
    {
      label: "Recommendations",
      isActive: false,
    },
    {
      label: "FAQs",
      isActive: false,
    },
    {
      label: "Reviews",
      isActive: false,
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
