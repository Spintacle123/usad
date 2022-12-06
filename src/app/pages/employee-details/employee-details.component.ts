import { Component, OnInit } from '@angular/core';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  faStar = faStar;
  userId = "";
  faStarHalfStroke = faStarHalfStroke;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getQuery();
  }

  scroll(id:any) {
    let el = document.getElementById(id);
    el?.scrollIntoView({behavior: 'smooth'});
  }

  getQuery() {
    this.route.queryParams.subscribe(params => {
      this.userId = params['userId'];
      console.log(params['userId']);
    });
  }

}
