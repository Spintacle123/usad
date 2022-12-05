import { Component, OnInit } from '@angular/core';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  faStar = faStar;
  faStarHalfStroke = faStarHalfStroke;

  constructor() { }

  ngOnInit(): void {
  }

}
