import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() navigate = new EventEmitter<string>();

  navBar = [
    {
      router: 'overview',
      label: "Overview",
      isActive: true,
    },
    {
      router: 'description',
      label: "Description",
      isActive: false,
    },
    {
      router: 'about',
      label: "About the applicant",
      isActive: false,
    },
    {
      router: 'packages',
      label: "Comparing Packages",
      isActive: false,
    },
    {
      router: 'recommentdations',
      label: "Recommendations",
      isActive: false,
    },
    {
      router: 'faqs',
      label: "FAQs",
      isActive: false,
    },
    {
      router: 'reviews',
      label: "Reviews",
      isActive: false,
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  navigateTo(url: string) {
    this.navigate.emit(url);
  }

}
