import { Component, OnInit, Input } from '@angular/core';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-default-profile',
  templateUrl: './user-default-profile.component.html',
  styleUrls: ['./user-default-profile.component.css']
})
export class UserDefaultProfileComponent implements OnInit {
  faStar = faStar;
  faStarHalfStroke = faStarHalfStroke;
  @Input() styling = 'pl-9';
  @Input() imageSize = 'w-[3.5em] h-[3.5em]';
  @Input() hasContact = false;

  constructor() { }

  ngOnInit(): void {
  }

}