import { Component, OnInit } from '@angular/core';
import { faLocation, faUser, faClock, faArrowRightToCity, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-user-packages',
  templateUrl: './user-packages.component.html',
  styleUrls: ['./user-packages.component.css']
})
export class UserPackagesComponent implements OnInit {
  faLocation = faLocation;
  faUser = faUser;
  faClock = faClock;
  faArrowRightToCity = faArrowRightToCity;
  faArrowRightLong = faArrowRightLong;

  constructor() { }

  ngOnInit(): void {
  }

}
