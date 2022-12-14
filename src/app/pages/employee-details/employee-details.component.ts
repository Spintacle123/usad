import { Component, OnInit } from '@angular/core';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { Router, ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  faStar = faStar;
  userId = "";
  pageLoading = true;
  faStarHalfStroke = faStarHalfStroke;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public event: EventService
  ) { }

  ngOnInit(): void {
    this.event.publish('isloading', true);
    this.setLoading(false);
    this.getQuery();

    this.event.subscribe('searchAgain', () => {
      this.pageLoading = true;
      this.event.publish('isloading', true);
      this.setLoading(false);
   });
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

  setLoading(load: boolean) {
    setTimeout(()=> {
        this.pageLoading = load;
        this.event.publish('isloading', load);
      }, 5000);
  }
}
