import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css']
})
export class AssessmentComponent implements OnInit {
  showDetails = true;
  isExam = false;
  type = ""
  menus = [
    {
      label: 'All',
      isActive: false
    },
    {
      label: 'Recommended',
      isActive: false
    },
    {
      label: 'Industry Knowledge',
      isActive: false
    },
    {
      label: 'Tools & Technology',
      isActive: false
    },
  ]

  skills = [
    {
      title: 'Carpenter',
      desc: 'You must complete this assessment in one session — make sure your internet is reliable. You can retake this'
    },
    {
      title: 'Masson',
      desc: 'You must complete this assessment in one session — make sure your internet is reliable. You can retake this'
    },
    {
      title: 'Civil Engineer III',
      desc: 'You must complete this assessment in one session — make sure your internet is reliable. You can retake this'
    },
    {
      title: 'Welding',
      desc: 'You must complete this assessment in one session — make sure your internet is reliable. You can retake this'
    },
    {
      title: 'Construction',
      desc: 'You must complete this assessment in one session — make sure your internet is reliable. You can retake this'
    },
    {
      title: 'Rapper Wood',
      desc: 'You must complete this assessment in one session — make sure your internet is reliable. You can retake this'
    }
  ]

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    private event: EventService
  ) { }

  ngOnInit(): void {
    this.event.subscribe('takeExam', (practice)=>{
      this.type = practice
      this.isExam = true
    })
  }

}
