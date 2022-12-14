import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-assessment-details',
  templateUrl: './assessment-details.component.html',
  styleUrls: ['./assessment-details.component.css']
})
export class AssessmentDetailsComponent implements OnInit {

  constructor(
    private router: Router,
    private event: EventService
  ) { }

  ngOnInit(): void {
  }

  navigateTo(type: string){
    this.event.publish('takeExam', type)
  }

}
