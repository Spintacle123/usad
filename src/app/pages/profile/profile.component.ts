import { Component, OnInit } from '@angular/core';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { Router, ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/services/event.service';
import { profiles } from 'src/app/services/common';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  faStar = faStar;
  userId = "";
  pageLoading = true;
  faStarHalfStroke = faStarHalfStroke;
  profiles = profiles;
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
      this.getProfile();
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
      }, 2000);
  }

  getProfile(){
    this.activeProfile = profiles[ Math.floor(Math.random() * 5)];
  }
}
