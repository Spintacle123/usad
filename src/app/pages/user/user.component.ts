import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  currentRoute = ""
  activeProfile = {
    imgUrl: 'assets/imgs/dp.jpg',
    name: 'Kevin Santos Dy',
    email: 'kevin@gmail.com',
    rating: 3,
    address: '40 Sgt. Esguera, Quezon City',
    memberSince: 'Sept 2022',
    reponseTime: 3,
    language: [
      {
        dialect: 'English',
        mastery: 'Professional Conversation'
      },
      {
        dialect: 'Filipino',
        mastery: 'Native/Bilingual'
      }
    ],
    skills: [
      "plumbing",
      "carpenting",
      "mechanical skill",
      "log builder",
      "problem solving",
      "industrial",
      "finish carpenter"
    ]
  }

  newGig = true;

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
    this.currentRoute = this.router.url;
  }

  validateRoute(){
    if(!this.currentRoute.includes('/new-gig') && !this.currentRoute.includes('/skill-assessment')){
      return true;
    }else{
      return false;
    }
  }

}
