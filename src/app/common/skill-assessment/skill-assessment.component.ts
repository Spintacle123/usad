import { Component, OnInit } from '@angular/core';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-skill-assessment',
  templateUrl: './skill-assessment.component.html',
  styleUrls: ['./skill-assessment.component.css']
})
export class SkillAssessmentComponent implements OnInit {
  faThumbsUp = faThumbsUp
  faThumbsDown = faThumbsDown
  faEye = faEye
  faEyeSlash = faEyeSlash
  isShow = true;
  isNewGig = true;

  comment = {
    isHelpfull : true
  }
  constructor(
    private router : Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  setShow(){
    this.isShow = !this.isShow
  }

  setNewGig(bol:boolean){
    this.isNewGig = bol
  }

  takeTest(){
    this.router.navigate(['/freelancer/borromeo.alvin/skill-assessment'])
    .then(() => {
      window.location.reload();
    });
  }

}
